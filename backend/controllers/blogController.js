import imagekit from "../configs/imageKit.js";
import Blog from "../models/Blog.js";
import main from "../configs/gemini.js";
import Comment from "../models/Comment.js";
import fs from 'fs';

export const addBlog = async (req, res) =>{
    try {
        const {title, subTitle, description, category, isPublished} = JSON.parse(req.body.blog);
        const imageFile = req.file;

        //Check if all fields are present
        if(!title || !description || !category || !imageFile) {
            return res.json({success: false, message: "Vui lòng điền tất cả các trường bắt buộc."});
        }
        
        const fileBuffer = fs.readFileSync(imageFile.path);
        //Upload Image to ImageKit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs"
        })

        //Optimization through imagekit URL transformation
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {quality: 'auto'}, //Auto compression
                {format: 'webp'}, //Convert to modern format
                {width: '1080'} //Width resizing
            ]
        });

        const image = optimizedImageUrl;

        await Blog.create({title, subTitle, description, category, image, isPublished})

        res.json({
            success: true, message: "Thêm bài viết thành công."
        })

    } catch (error) {
        res.json({success: false , message: error.message})
    }
    
}

export const getAllBlogs = async (req, res) =>{
    try {
        const blogs = await Blog.find({isPublished: true})
        res.json({success: true, blogs})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const getBlogById = async (req, res) => {
    try {
        const {blogId} = req.params;
        const blog = await Blog.findById(blogId);
        if(!blog) {
            return res.json({success: false, message: "Không tìm thấy bài viết."});
        }
        res.json({success: true, blog})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const deleteBlogById = async (req, res) => {
    try {
        const {id} = req.body;
        await Blog.findByIdAndDelete(id);

        //Delete all comments associated with the blog
        await Comment.deleteMany({blog: id});

        res.json({success: true, message: 'Xóa bài viết thành công.'})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const togglePublish = async (req, res) => {
    try {
        const {id} = req.body;
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({success: true, message: "Trạng thái bài viết đã được cập nhật."})
    } catch (error) {
        res.json({success: false, message: error.message}) 
    }
}

export const addComment = async (req, res) => {
    try {
        const {blog,  name, content} = req.body;
        await Comment.create({blog, name, content});
        res.json({success: true, message: "Thêm bình luận thành công, đang chờ phê duyệt."})

    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const getBlogComments = async (req, res) => {
    try {
        const {blogId} = req.body;
        const comments = await Comment.find({blog: blogId, isApproved: true}).sort({createdAt: -1});
        res.json({success: true, comments})

    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const generateContent = async (req, res) => {
    try {
        const {prompt} = req.body;
        const content = await main(prompt + '\n\nGenerate a detailed blog post based on the above title. Make sure the content is informative, engaging, and well-structured.');
        res.json({success: true, content})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}


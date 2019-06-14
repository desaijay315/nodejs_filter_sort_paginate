const mongoose = require('mongoose');

const PostSchema  = new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required:true,
        trim: true
    },
    published: Boolean,
    author:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{
    timestamps: true
});

PostSchema.virtual('comments', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'postId'
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post
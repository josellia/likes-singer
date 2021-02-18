import {Schema, model } from 'mongoose';

const singer = new Schema({
    name: {type: String,  required: true,
    trim: true},
    likes: {type: Number, required:false},
    
    
}, {
    versionKey:false,
    timestamps: true
});

export default model('Singer', singer);
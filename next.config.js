/* eslint-disable no-undef */
const withImages = require('next-images')
//const withVideos = require('next-videos')

//module.exports = withImages(withVideos())
module.exports = withImages({
    images: {
        disableStaticImages: true
    }
})
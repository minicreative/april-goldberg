$(document).ready(() => {
    setupLightbox()
    setupScrollImages()
})

function setupLightbox() {
    lightbox.option({
        wrapAround: true,
    })
}

function setupScrollImages() {
    $(".scrollImages").on('click', function () {
        let images = $(this).prev("div")[0]
        if (images == undefined) return
        let position = $(images).scrollLeft()
        $(images).animate({
            scrollLeft: position + 300
        }, 800)
    })
}
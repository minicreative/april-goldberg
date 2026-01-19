$(document).ready(() => {
    setupScrollImages()
})

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
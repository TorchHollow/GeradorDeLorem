const gerarTexto = document.getElementById("gerarLorem")
const loremContainer = document.getElementById("lorem")

gerarTexto.addEventListener('click', (lorem) => {
    let loremInner = `
    <div class="containerGer">
    <p class="textoGer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel pharetra elit, nec pulvinar urna. Proin ac elit eu quam gravida placerat et dictum arcu. Nam in dui felis. Etiam venenatis vulputate tortor ut condimentum. Donec efficitur ac nisl sed mollis. Etiam non auctor nisi. Maecenas hendrerit rutrum ligula, sed convallis odio. Aliquam fermentum est purus, sit amet congue sem elementum et. Donec consequat nibh erat. Mauris sit amet dapibus nibh.

    Nam luctus orci et odio lobortis efficitur. Donec interdum magna ut leo suscipit aliquam. Proin non orci mollis, eleifend tortor ac, feugiat risus. Donec et eleifend tortor, quis dapibus elit. Phasellus pharetra, ipsum dignissim ultricies venenatis, nisi nibh volutpat sem, a ornare est dui at est. Nulla facilisi. Praesent vel dapibus turpis, vitae luctus diam. Donec cursus dolor eget elit lobortis convallis. Pellentesque pretium turpis vitae tincidunt feugiat.
    
    Aenean semper ipsum quis felis ullamcorper, tempus feugiat tortor sagittis. Pellentesque vestibulum pulvinar turpis sit amet semper. Nunc vel nunc ac mauris posuere suscipit vel quis magna. Mauris et sollicitudin velit. Aenean scelerisque rhoncus nulla, in faucibus nisi interdum eget. Pellentesque sem mauris, rhoncus eget nisi quis, lobortis ultricies nunc. Etiam sit amet eros nisi. Aenean vel volutpat augue. Nunc faucibus pharetra purus, ut pellentesque velit suscipit venenatis. Aliquam erat volutpat. Quisque fermentum fermentum ante non cursus.
    
    Quisque luctus sit amet tellus vel congue. Phasellus gravida viverra turpis. Proin pretium nisi finibus risus posuere malesuada. In hac habitasse platea dictumst. Aliquam interdum posuere magna, sit amet luctus turpis pulvinar vel. Integer pulvinar lacus mauris, ut scelerisque purus ullamcorper pretium. Fusce mi libero, ullamcorper at nisl vehicula, eleifend eleifend sem. Nullam id risus non tellus ultricies euismod. Sed faucibus dictum justo. Cras vel blandit ex. Vestibulum non porttitor urna, volutpat fringilla quam. Phasellus vel vestibulum magna, ac pellentesque lorem.
    
    Duis posuere vestibulum ullamcorper. Nam interdum ultricies lacus, ut euismod leo luctus a. Sed elit tortor, mattis vel dignissim fermentum, mollis vel magna. Pellentesque sapien erat, aliquam id orci sed, laoreet pellentesque odio. Quisque interdum orci a turpis porttitor maximus. Morbi tincidunt consectetur leo, a lobortis sem maximus sed. Suspendisse ac pretium nunc, ut ornare lacus. Fusce ac porttitor erat. Curabitur fermentum velit at arcu finibus, a placerat felis ornare. Sed malesuada augue at enim pulvinar efficitur.</p>
    </div>
    `

    loremContainer.innerHTML = loremInner

    


})








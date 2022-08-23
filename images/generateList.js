const fs = require('fs');

fs.readdir('./images', (err, files) => {
    files = files.filter(file => !file.endsWith(".js") && !file.endsWith(".json"));
    const list = files.map(file => {
        const true_filename = file.split('.').slice(0, -1).join('.')
        let written_filename = true_filename
        if (true_filename.includes("seed")) {
            written_filename = "StyleGAN3_" + written_filename
        }
        return ({
            title: written_filename,
            file,
        })
    });
    let json = JSON.stringify({images: list}, null, 4);
    fs.writeFileSync('./images/images.json', json);
});

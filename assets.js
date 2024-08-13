export default {
    colors: {
        default: cl("#ca3a3a"),
        error: cl("#544040"),
        ds_gray: cl("#4e5058"),
    },
    icons: {
        bloodybladez_icon: "https://cdn.discordapp.com/attachments/1247877398880325682/1272873665926664222/logo_squ_bg.png?ex=66bc8f7a&is=66bb3dfa&hm=3a3130a0ad840b1ce5c721eee1b4641372f02f5292f67071ad714a2ad4ee560e&",
        bloodybladez_logo: "https://cdn.discordapp.com/attachments/1247877398880325682/1272873616199122964/logo_squ.png?ex=66bc8f6e&is=66bb3dee&hm=75bcd9481ce92db6830730f32428d8439e1becde9d1857473839041cfbcbf4b3&",
        no: "https://cdn.discordapp.com/attachments/1235673660606386206/1235680188612739112/No.png?ex=66b71c1a&is=66b5ca9a&hm=31150c72560211d5b739957b0094166f4845d8faa9a9cb00901d9ae657728b37&",
    }
}

function cl(color)
    { return parseInt(color.slice(1), 16); }

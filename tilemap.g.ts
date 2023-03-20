// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000708080808080808080808080808080403090909010202020901020202010101030909090109090909010909090102020309090901090101090201010901090903090909010901010909020109010905030101010109010109090901090209050301090909090101090909010909090503020202020202010909010201010205030909090909090202020209010109050302020102010909090909090102090503090909090202020201010902090905030109090909090909010109090901050101090909090909090102020202020501020202020201090902090909090905030909090909010109090901010109050a020202020202020202020202020206`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 . . . . 2 . . . . . . . 
. 2 2 2 . 2 2 2 2 . 2 2 2 . . . 
. 2 2 2 . 2 . . 2 . . . 2 . 2 2 
. 2 2 2 . 2 . . 2 2 . . 2 . 2 . 
. . . . . 2 . . 2 2 2 . 2 . 2 . 
. . 2 2 2 2 . . 2 2 2 . 2 2 2 . 
. . . . . . . . 2 2 . . . . . . 
. 2 2 2 2 2 2 . . . . 2 . . 2 . 
. . . . . . 2 2 2 2 2 2 . . 2 . 
. 2 2 2 2 . . . . . . 2 . 2 2 . 
. . 2 2 2 2 2 2 2 . . 2 2 2 . . 
. . 2 2 2 2 2 2 2 . . . . . . . 
. . . . . . . 2 2 . 2 2 2 2 2 . 
. 2 2 2 2 2 . . 2 2 2 . . . 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tileDarkGrass3,sprites.castle.tilePath7], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

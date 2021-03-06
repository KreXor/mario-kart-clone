var DIRECTION_RIGHT = 1001,
    DIRECTION_LEFT = 1002,
    DIRECTION_UP = 1003,
    DIRECTION_DOWN = 1004;

//States
var STATE_MAIN_MENU = 801,
    STATE_SELECT_MENU = 802,
    STATE_PLAY_MAP = 803,
    STATE_LOAD_ASSETS = 804;

    PLAYER_STATE_DRIVE = 850,
    PLAYER_STATE_JUMP = 851,
    PLAYER_STATE_SPIN = 852;

//Levels
var LEVEL1_MAP = "media/map.png";

//Sprite types
var SOLID = 300,
    COIN = 301,
    PLAYER = 302,
    CLOUD = 303,
    BLOCK = 304,
    ITEM = 305,
    AI = 306;

//Ground types
var ROAD = 100,
    WALL = 101;

//Items types
var ITEM_NONE = 0,
    ITEM_GREEN_SHELL = 1,
    ITEM_COIN = 2,
    ITEM_BANAN_PEEL = 3,
    ITEM_MUSHROOM = 4,
    ITEM_RED_SHELL = 5,
    ITEM_FEATHER = 6,
    ITEM_LIGHTNING = 7,
    ITEM_STAR = 8;
  //  ITEM_GHOST = 9;

  var preloader_imageURLs = ["media/Mario_pipe.png",
                    "media/Coin.png",
                    "media/mario.png",
                    "media/brick.png",
                    "media/cloud.png",
                    "media/map.png",
                    "media/green_shell.png",
                    "media/banana_peel.png",
                    "media/items.png",
                    "media/tree.png",
                    "media/menu.png",
                    "media/mushroom.png",
                    "media/bowser.png",
                    "media/peach.png",
                    "media/player_select.png",
                    "media/minimap.png",



                  ],
      preloader_images = [],
      preloader_images_count = preloader_imageURLs.length;

//Textures
var PIPE_TEXTURE = 0,
    COIN_TEXTURE = 0,
    MARIO_TEXTURE = 0,
    BRICK_TEXTURE = 0,
    CLOUD_TEXTURE = 0,
    MAP_TEXTURE = 0,
    GREEN_SHELL_TEXTURE = 0,
    BANANA_PEEL_TEXTURE = 0,
    ITEMS_TEXTURE = 0,
    TREE_TEXTURE = 0,
    MAIN_MENY_BACKGROUND = 0,
    MUSHROOM = 0;

function preLoadTexture() {
  PIPE_TEXTURE = new MapTexture("Mario_pipe.png", 0, 0, 0, 0);
  COIN_TEXTURE = new MapTexture("Coin.png", 0, 0, 0, 0);
  MARIO_TEXTURE = new MapTexture("mario.png", 36, 36, 1, 0);
  BRICK_TEXTURE = new MapTexture("brick.png", 0, 0, 0, 0);
  CLOUD_TEXTURE = new MapTexture("cloud.png", 0, 0, 0, 0);
  MAP_TEXTURE = new MapTexture("map.png", 0, 0, 0, 0);
  GREEN_SHELL_TEXTURE = new MapTexture("green_shell.png", 0, 0, 0, 0);
  BANANA_PEEL_TEXTURE = new MapTexture("banana_peel.png", 0, 0, 0, 0);
  ITEMS_TEXTURE = new MapTexture("items.png", 32, 0, 0, 0);
  TREE_TEXTURE = new MapTexture("tree.png", 0, 0, 0, 0);
  SELECT_MENU = new MapTexture("player_select.png", 0, 0, 0, 0);
  MAIN_MENY_BACKGROUND = new MapTexture("menu.png", 0, 0, 0, 0);
  MUSHROOM = new MapTexture("mushroom.png", 0, 0, 0, 0);
  MINIMAP_TEXTURE = new MapTexture("minimap.png", 0, 0, 0, 0);


}

var shark = {
  nucleated: true,
  blood: true,
  bones: false,
  scales: true,
  skin: false,
  eggLaying: true,
  teeth: true
};

var rayFinnedFish = Object.create(shark);
rayFinnedFish.bones = true;
rayFinnedFish.teeth = false;

var amphibian = Object.create(rayFinnedFish);
amphibian.skin = true;
amphibian.scales = false;
amphibian.teeth = true;

var reptile = Object.create(amphibian);
reptile.scales = true;
reptile.skin = false;

var mammal = Object.create(rayFinnedFish);
mammal.eggLaying = false;
mammal.skin = true;

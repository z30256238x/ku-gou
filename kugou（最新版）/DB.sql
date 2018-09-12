SET NAMES UTF8;
DROP DATABASE IF EXISTS kougou;
CREATE DATABASE kougou CHARSET=UTF8;
USE kougou;
#创建轮播表;
CREATE TABLE carousel(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(128),
  is_recommend BOOLEAN
);
INSERT INTO carousel VALUES(null,"http://localhost:3000/img/index/carousel_2.jpg",1);
INSERT INTO carousel VALUES(null,"http://localhost:3000/img/index/carousel_3.jpg",1);
INSERT INTO carousel VALUES(null,"http://localhost:3000/img/index/carousel_4.jpg",1);
INSERT INTO carousel VALUES(null,"http://localhost:3000/img/index/carousel_5.jpg",1);
INSERT INTO carousel VALUES(null,"http://localhost:3000/img/index/carousel_6.jpg",1);
#创建歌单表;
CREATE TABLE playlist(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(256),
  clickCount BIGINT,
  is_recommend BOOLEAN,
  img_url VARCHAR(128),
  url VARCHAR(128),
  singer VARCHAR(64)
);
INSERT INTO playlist VALUES(null,"往后的人生，做好一偏头就能看见你",1030000,1,"http://localhost:3000/img/index/jx_big.jpg","http://localhost:3000/playlist.html","layis-eo");
INSERT INTO playlist VALUES(null,"古风治愈女友选秀，你喜欢哪一款？",201000,1,"http://localhost:3000/img/index/20180724120352933299.jpg","http://localhost:3000/playlist.html","值得听");
INSERT INTO playlist VALUES(null,"路边理发店的镇店欧美BGM",305000,1,"http://localhost:3000/img/index/20180724175109794461.jpg","http://localhost:3000/playlist.html","墨小宝");
INSERT INTO playlist VALUES(null,"传统乐器邂逅流行，别样不失风韵",523000,1,"http://localhost:3000/img/index/jx_small1.jpg","http://localhost:3000/playlist.html","上晏");
INSERT INTO playlist VALUES(null,"全世界都在说中国话！韩国歌曲中文版选集",56000,1,"http://localhost:3000/img/index/20180726132157277082.jpg","http://localhost:3000/playlist.html","白色镜框");
#创建热门榜单;
CREATE TABLE hot_list(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(128),
  img_url VARCHAR(256)
);
INSERT INTO hot_list VALUES(null,"酷狗飙升榜","http://127.0.0.1:3000/img/index/T1M4h4BKKj1RCvBVdK.jpg_240x240.jpg");
INSERT INTO hot_list VALUES(null,"酷狗TOP500","http://127.0.0.1:3000/img/index/T1fHd4BXd_1RCvBVdK.jpg_240x240.jpg");
INSERT INTO hot_list VALUES(null,"网络红歌榜","http://127.0.0.1:3000/img/index/T1Fpd4BKbg1RCvBVdK.jpg_240x240.jpg");
#创建热门歌单列表
CREATE TABLE hot_play(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(128),
  duration VARCHAR(32)
);
INSERT INTO hot_play VALUES(null,"洛天依、跟风社 - 98k","3:16");
INSERT INTO hot_play VALUES(null,"华晨宇 - 寒鸦少年【斗破苍穹电视剧主题曲】","5:15");
INSERT INTO hot_play VALUES(null,"洛天依 - 自食恶果","3:16");
INSERT INTO hot_play VALUES(null,"霍尊 - 世外蓬莱","3:26");
INSERT INTO hot_play VALUES(null,"乌兰图雅 - 当你老了","4:58");
INSERT INTO hot_play VALUES(null,"Michael Jackson、Mark Ronson - Michael Jackson x Mark Ronso...","5:00");
INSERT INTO hot_play VALUES(null,"刘浩航、夏婉安 - 我不是你的她","3:59");
INSERT INTO hot_play VALUES(null,"徐誉滕 - 如果你爱上了别人","4:02");
INSERT INTO hot_play VALUES(null,"Nine Treasures - Sonsii","3:34");
INSERT INTO hot_play VALUES(null,"王奕心 - 一直在等你回头","4:00");
INSERT INTO hot_play VALUES(null,"莫籽、Neko(4) - 盗将行","3:18");
INSERT INTO hot_play VALUES(null,"谢采妘 - 我还年轻","3:06");
INSERT INTO hot_play VALUES(null,"王欣(3) - 等待情郎你快出现","3:43");
INSERT INTO hot_play VALUES(null,"Seventeen - 怎么办 (Oh My!) (Chinese version)","3:09");
INSERT INTO hot_play VALUES(null,"王奕心 - 一直在等你回头","4:00");
#创建新歌首发表
CREATE TABLE new_start(
  nid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(32),
  name VARCHAR(32),
  download VARCHAR(128),
  play VARCHAR(64),
  duration VARCHAR(32)
);
INSERT INTO new_start VALUES(null,"hy","周杰伦-简单爱","#","http://localhost:3000/detailAudio.html","04:27");
INSERT INTO new_start VALUES(null,"hy","张惠妹、林忆莲 - 双影【如懿传电视剧主题曲】","#","http://localhost:3000/detailAudio.html","03:24");
INSERT INTO new_start VALUES(null,"hy","裘海正、好妹妹 - 爱我的人和我爱的人","#","http://localhost:3000/detailAudio.html","02:21");
INSERT INTO new_start VALUES(null,"hy","GAI - 豁得凶","#","http://localhost:3000/detailAudio.html","06:17");
INSERT INTO new_start VALUES(null,"hy","金志文 - 乱世王者【乱世王者腾讯游戏同名主题曲】","#","http://localhost:3000/detailAudio.html","02:23");
INSERT INTO new_start VALUES(null,"hy","乌兰托娅 - 花桥流水","#","http://localhost:3000/detailAudio.html","04:28");
INSERT INTO new_start VALUES(null,"om","Calvin Harris、Sam Smith - Promises","#","http://localhost:3000/detailAudio.html","04:27");
INSERT INTO new_start VALUES(null,"om","Marshmello、Bastille - Happier","#","http://localhost:3000/detailAudio.html","03:33");
INSERT INTO new_start VALUES(null,"om","Camila Cabello、Swae Lee - Real Friends","#","http://localhost:3000/detailAudio.html","04:47");
INSERT INTO new_start VALUES(null,"om","Cat Power、Lana Del Rey - Woman","#","http://localhost:3000/detailAudio.html","03:24");
INSERT INTO new_start VALUES(null,"om","Jess Glynne - All I Am","#","http://localhost:3000/detailAudio.html","03:48");
INSERT INTO new_start VALUES(null,"om","Janet Jackson、Daddy Yankee - Made For Now","#","http://localhost:3000/detailAudio.html","03:33");
INSERT INTO new_start VALUES(null,"hg","SUPER JUNIOR-D&E - 머리부터 발끝까지 ( Bout you)","#","http://localhost:3000/detailAudio.html","03:33");
INSERT INTO new_start VALUES(null,"hg","孝琳 - BAE","#","http://localhost:3000/detailAudio.html","04:35");
INSERT INTO new_start VALUES(null,"hg","Ken - 늦은 후회 (The Late Regret)","#","http://localhost:3000/detailAudio.html","04:47");
INSERT INTO new_start VALUES(null,"hg","梁耀燮 - 그래도 나 (即使如此我也)【一起吃饭吧3 OST】","#","http://localhost:3000/detailAudio.html","03:24");
INSERT INTO new_start VALUES(null,"hg","Seventeen - A-TEEN","#","http://localhost:3000/detailAudio.html","03:48");
INSERT INTO new_start VALUES(null,"hg","Red Velvet - Power Up","#","http://localhost:3000/detailAudio.html","03:33");
INSERT INTO new_start VALUES(null,"rb","亜咲花 - Eternal Star【ISLAND片尾曲】","#","http://localhost:3000/detailAudio.html","03:24");
INSERT INTO new_start VALUES(null,"rb","乃木坂46 - ジコチューで行こう!","#","http://localhost:3000/detailAudio.html","03:33");
INSERT INTO new_start VALUES(null,"rb","YURiKA - ふたりの羽根【轻羽飞扬片头曲】","#","http://localhost:3000/detailAudio.html","03:48");
INSERT INTO new_start VALUES(null,"rb","ClariS - ねがい","#","http://localhost:3000/detailAudio.html","04:35");
INSERT INTO new_start VALUES(null,"rb","Red Velvet - Power Up","#","http://localhost:3000/detailAudio.html","03:13");
INSERT INTO new_start VALUES(null,"rb","Da-iCE - BET","#","http://localhost:3000/detailAudio.html","03:43");
#创建推荐MV表
CREATE TABLE recommend_mv(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  singer VARCHAR(32),
  mv_url VARCHAR(128)
);
INSERT INTO recommend_mv VALUES(null,"Hold Me Down(中文版)","吴亦凡","http://localhost:3000/img/index/wyf.jpg");

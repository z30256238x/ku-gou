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
#创建歌单表;
CREATE TABLE playlist(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(256),
  clickCount BIGINT,
  is_recommend BOOLEAN,
  img_ur VARCAHR(128),
  singer VARCHAR(64),
);
#创建热门榜单;
CREATE TABLE hot-list(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(128),
  img_url VARCAHR(256),
);
#创建新歌首发表
CREATE TABLE new-start(
  nid INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32),
);
#创建推荐MV表
CREATE TABLE recommend-mv(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  singer VARCHAR(32),
  mv_url VARCHAR(128)
);
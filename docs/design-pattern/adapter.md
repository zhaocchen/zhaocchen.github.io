---
slug: adapter
title: 结构型 | 适配器模式
author: Zhao chen
author_url: https://github.com/zhaocchen
tags: []
draft: false
description: 
---


### 意图

### 场景

应用：

### 缺点

### 实现

```ts
// 1. 为媒体播放器和更高级的媒体播放器创建接口
interface MediaPlayer {
  play(audioType: string, fileName: string): void;
}

interface AdvancedMediaPlayer {
  playVlc(fileName: string): void;
  playMp4(fileName: string): void;
}

// 2. 创建实现了 AdvancedMediaPlayer 接口的实体类
class VlcPlayer implements AdvancedMediaPlayer {
  public playVlc(fileName: string): void {
    console.log("Playing vlc file. Name: " + fileName);
  }
  public playMp4(fileName: string): void {
    //什么也不做
  }
}

class Mp4Player implements AdvancedMediaPlayer {
  public playVlc(fileName: string): void {
    //什么也不做
  }
  public playMp4(fileName: string): void {
    console.log("Playing mp4 file. Name: " + fileName);
  }
}

// 3. 创建实现了 MediaPlayer 接口的适配器类
class MediaAdapter implements MediaPlayer {
  advancedMusicPlayer: AdvancedMediaPlayer;
  constructor(audioType: string) {
    if (audioType.toLocaleLowerCase() == "vlc") {
      this.advancedMusicPlayer = new VlcPlayer();
    } else if (audioType.toLocaleLowerCase() == "mp4") {
      this.advancedMusicPlayer = new Mp4Player();
    }
  }

  public play(audioType: string, fileName: string): void {
    if (audioType.toLocaleLowerCase() == "vlc") {
      this.advancedMusicPlayer.playVlc(fileName);
    } else if (audioType.toLocaleLowerCase() == "mp4") {
      this.advancedMusicPlayer.playMp4(fileName);
    }
  }
}

// 4. 创建实现了 MediaPlayer 接口的实体类
class AudioPlayer implements MediaPlayer {
  mediaAdapter: MediaAdapter;

  public play(audioType: string, fileName: string): void {
    //播放 mp3 音乐文件的内置支持
    if (audioType.toLocaleLowerCase() == "mp3") {
      console.log("Playing mp3 file. Name: " + fileName);
    }
    //mediaAdapter 提供了播放其他文件格式的支持
    else if (audioType.toLocaleLowerCase() == "vlc" || audioType.toLocaleLowerCase() == "mp4") {
      this.mediaAdapter = new MediaAdapter(audioType);
      this.mediaAdapter.play(audioType, fileName);
    }
    else {
      console.log("Invalid media. " + audioType + " format not supported");
    }
  }
}
```

测试

```ts
// 5. 使用 AudioPlayer 来播放不同类型的音频格式
class AdapterPatternDemo {
  audioPlayer: AudioPlayer = new AudioPlayer();
  constructor(args: string[]) {
    this.audioPlayer.play("mp3", "beyond the horizon.mp3");
    this.audioPlayer.play("mp4", "alone.mp4");
    this.audioPlayer.play("vlc", "far far away.vlc");
    this.audioPlayer.play("avi", "mind me.avi");
  }
}

new AdapterPatternDemo([]);
// Playing mp3 file. Name: beyond the horizon.mp3
// Playing mp4 file. Name: alone.mp4
// Playing vlc file. Name: far far away.vlc
// Invalid media. avi format not supported
```

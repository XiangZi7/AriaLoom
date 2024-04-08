import { Reslyric } from '@/api/interface.ts';
import { LyricLine, MergedLyricLine } from '@/model/interface/player';

export function parseLyrics(lyricString: string): LyricLine[] {
  const lines = lyricString.split('\n');
  const parsedLines: LyricLine[] = [];

  lines.forEach((line) => {
    const matches = [...line.matchAll(/\[(\d{2}):(\d{2})\.(\d{2,3})\]/g)];
    const parts = line.split(/\[.*?\]/g);
    const text = parts.pop()?.trim() ?? ''; // 使用可选链和空值合并操作符

    if (matches.length && text) {
      matches.forEach((match) => {
        const minutes = parseInt(match[1], 10);
        const seconds = parseInt(match[2], 10);
        const milliseconds = match[3].length === 3 ? parseInt(match[3], 10) : parseInt(match[3], 10) * 10;
        const time = minutes * 60 * 1000 + seconds * 1000 + milliseconds;
        parsedLines.push({ time: time, text: text });
      });
    }
  });

  return parsedLines;
}

export function parseAndMergeLyrics(lyrics: Reslyric) {
  const { lyricUser, transUser, lrc, tlyric, romalrc } = lyrics;
  // 将原文和翻译都解析为[{ time, text }]的格式
  const originalParsed: LyricLine[] = parseLyrics(lrc.lyric) || '';
  const translatedParsed: LyricLine[] = parseLyrics(tlyric.lyric) || '';
  const romaParsed: LyricLine[] = parseLyrics(romalrc.lyric) || '';

  // 合并原文和翻译，假设每一行的时间戳都一致
  const mergedLyrics: MergedLyricLine[] = originalParsed.map((lyric): MergedLyricLine => {
    // 尝试找到时间戳匹配的翻译行
    const translation: LyricLine | undefined = translatedParsed.find((tran) => tran.time === lyric.time);
    const romaLrc: LyricLine | undefined = romaParsed.find((tran) => tran.time === lyric.time);
    // 如果找到翻译，添加到原文对象中
    return {
      ...lyric,
      translation: translation?.text,
      romaLrc: romaLrc?.text,
    };
  });

  return {
    lines: mergedLyrics,
    lyricUser: lyricUser || '',
    transUser: transUser || '',
  };
}

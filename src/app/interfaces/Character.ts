/**
 * Character Interface
 * @author Una Ada <una@xn--s7x.dev>
 * @version 2022.05.08
 *
 * {@link https://rizzzigit.github.io/jikan4.js/classes/Character.html}
 * {@link https://github.com/rizzzigit/jikan4.js/blob/main/src/resource/character.ts}
 */
import { ContentImage } from './ContentImage';
export interface Character {
  about?: string;
  favorites: number;
  id: number;
  image: ContentImage;
  name: string;
  nameKanji?: string;
  nicknames: Array<string>;
  url: string;
}

import { MyDisplay } from "../core/myDisplay";
import { Util } from "../libs/util";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  private _tg:HTMLSelectElement;

  constructor(opt:any) {
    super(opt)

    this._tg = document.createElement('select');
    this.getEl().append(this._tg);

    const num = 200;
    const keta = 20;

    for(let i = 0; i < num; i++) {
      let txt = ''
      let n0 = ~~(Util.instance.map(Math.sin(i * 0.15), 0, keta - 1, -1, 1));
      let n1 = ~~(Util.instance.map(Math.sin(i * 0.15), keta - 1, 0, -1, 1));
      let l = 0;
      for(l = 0; l < keta; l++) {
        txt += (l == n0 || l == n1) ? '★' : '_';
      }

      const opt = document.createElement('option');
      opt.innerHTML = txt;
      this._tg.append(opt);
    }
  }


  protected _update(): void {
    super._update();
  }
}
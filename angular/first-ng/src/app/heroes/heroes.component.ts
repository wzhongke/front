import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero :Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes :Hero[];
  selectedHero : Hero;
  /**
   * @param heroService 当 Angular 创建 HeroesComponent 时，依赖注入系统就会把这个 heroService 参数设置为 HeroService 的单例对象。
   */
  constructor(private heroService: HeroService) { }

  /**
   * 钩子函数
   */
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    /**异步获取数据 */
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);;
  }

  onSelect(hero) {
    console.log(hero);
    this.selectedHero = hero;
  }

}

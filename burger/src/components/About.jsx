import React from 'react'
import AboutImage from '../assets/aboutImage.png'
import '../styles/About.css'
function About() {

  return (
    <div className='about'>
      <div 
      className='aboutTop' 
      style={{backgroundImage:`url(${AboutImage})`}}>
      </div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>OhannesBurger’e hoşgeldiniz.
Burada hamburgerler, patatesler ve köfteler her zaman sıcak, taze ve siparişten sonra yapılır. Yediğiniz en iyi burgeri yapmak için burdayız.
OhannesBurger fikri iki taze endüstri mühendisinin Amerika macerasından, hamburgere duyulan tutkudan doğan bir obsesyon hikayesi.
Biz; Eğlenmeyi seven, ama sundukları ürünler konusunda çok ciddi olan insanlar. Tereyağlı brioche ekmeği, özel %100 yerli dana köftesi, taze malzemelerden üretilen günlük efsane soslar ve sıcacık patates kızartmalarından bahsediyoruz.
Yüksek kalite burgerleri sunarken, eğlenceyi elden bırakmayıp havalı, kendini beğenmiş bir mekan olmamaya özen gösteriyoruz.
Taze olduğumuz kadar eğlenceli, zeki olduğumuz kadar yaratıcı, seçici olduğumuz kadar da oyuncuyuz.</p>
      </div>

    </div>
  )
}

export default About
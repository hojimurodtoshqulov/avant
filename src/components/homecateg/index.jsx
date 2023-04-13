import React from 'react';
import Category from '../category';
import sxema from '../../assets/sxema.svg';
import analiz from '../../assets/analiz.svg';
import vipusk from '../../assets/vipusk.svg';
import cbor from '../../assets/cbor.svg';
import razrabotka from '../../assets/razrabotka.svg';
import c from './style.module.scss';

function Homecateg() {
    return (
        <div className={c.Categorys}>
          <div className={c.Category1}> <Category categ={'red'} img={sxema} text={'Создание 3D расчётной схемы каркаса сооружения'}/></div>
          <div className={c.Category2}><Category img={analiz} text={'Стадия расчетов, графического анализа и подбора сечений профилей'}/></div>
          <div className={c.Category3}> <Category img={vipusk} text={'Выпуск комплектов чертежей проектной (стадия П) и/или рабочей документации (стадия Р) марки КМ (конструкции металлические)'}/></div>
          <div className={c.Category4}><Category img={cbor} text={'Сбор постоянных и временных нагрузок, действующих на сооружение'}/></div>
          <div className={c.Category5}><Category img={razrabotka} text={'Разработка принципиальных узловых соединений элементов конструкции'}/> </div>
        </div>
    )
}

export default Homecateg;

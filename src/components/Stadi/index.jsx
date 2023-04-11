import React from 'react';
import StadiCard from './stadicard';
import sxema from '../../assets/sxema.svg';
import analiz from '../../assets/analiz.svg';
import vipusk from '../../assets/vipusk.svg';
import cbor from '../../assets/cbor.svg';
import razrabotka from '../../assets/razrabotka.svg';
import c from './style.module.scss';

function Stadi() {
    return (
        <div className={c.Stadicards}>
          <StadiCard img={sxema} staditext={'Создание 3D расчётной схемы каркаса сооружения'}/>
          <StadiCard img={analiz} staditext={'Стадия расчетов, графического анализа и подбора сечений профилей'}/>
          <StadiCard img={vipusk} staditext={'Выпуск комплектов чертежей проектной (стадия П) и/или рабочей документации (стадия Р) марки КМ (конструкции металлические)'}/>
          <StadiCard img={cbor} staditext={'Сбор постоянных и временных нагрузок, действующих на сооружение'}/>
          <StadiCard img={razrabotka} staditext={'Разработка принципиальных узловых соединений элементов конструкции'}/> 
        </div>
    )
}

export default Stadi;

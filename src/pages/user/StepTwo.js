/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useTranslation } from 'react-i18next';

export const StepTwo = () => {
  const { t } = useTranslation();
  <div>
 <div className="row ">
  <div className="col l4 s12 offset-l4"><br />
    <div className="card-panel">
      <h3 className="btn-color center">{t('details.yourDetails')}</h3>
   
    </div><br /><br /></div>
 </div>
  </div>
 
}


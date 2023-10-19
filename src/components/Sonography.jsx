import React from 'react'
import gyno from '../images/gynoc.jpg'

export default function Sonography() {
  return (
    <div>
       <div className="text-[40px] font-bold  text-center">
        <div className="relative ">
            <img src={gyno} alt="img" />
            <h1 className="absolute text-[60px] font-2xl top-40 left-10 xs:font-xl xs:text-[40px] xs:top-8  ">
                Sonography
            </h1>

        </div>
        <h1>About Sonography</h1>
    </div>
    <p className="text-[20px] text-center">Sonography, commonly referred to as ultrasonography, is a medical imaging method
        that uses high-frequency sound waves to view the internal organs of the body. Real-time imaging provided by this
        non-invasive, secure diagnostic technology enables medical practitioners to dynamically evaluate organs,
        tissues, and structures.
        <br/>
        A portable instrument called a transducer is put on the skin above the area of interest during a sonographic
        examination. High-frequency sound waves that are emitted by the transducer pass through the body and interact
        with various tissues. When these sound waves strike the boundaries between tissues of different densities, they
        return as echoes. The transducer picks up the echoes and turns them into electrical signals. <br/>Sonography is
        frequently used in obstetrics and gynaecology to track the fetus's growth and development throughout pregnancy.
        It aids in the detection of any anomalies and directs operations like amniocentesis. Sonography in abdominal
        imaging makes it possible to see organs such as the liver, gallbladder, kidneys, pancreas, and spleen, which
        helps in the detection of disorders including gallstones, tumours, and cysts.
        <br/>
        Sonography is a tool used by cardiologists to capture precise images of the heart and its internal organs. This
        aids in the diagnosis of cardiac conditions, the assessment of blood flow, and the evaluation of heart valve
        performance. With the ability to visualise soft tissues, joints, tendons, ligaments, and muscles, sonography is
        also used to assess the musculoskeletal system. This aids in the identification of injuries, inflammation, and
        other disorders. <br/>The safety profile of sonography is one of its significant benefits. It is safe for
        patients of all ages, including pregnant women, because it does not expose them to ionising radiation.
        Additionally portable, affordable, and offering real-time imaging, sonography enables dynamic evaluation of
        structures and functions.
        <br/>
        Sonography does, however, have some restrictions. In some circumstances, it might not offer as precise images as
        other modalities like MRI or CT scans. When imaging structures underneath bone or gas-filled organs, it might be
        less effective. Sonographic picture interpretation needs skill and knowledge because a variety of variables,
        including the patient's body habitus and the operator's technique, can alter image quality.
    </p>

    </div>
  )
}

import React from 'react'
import jointAndBone from '../images/joint and bone.jpg'

export default function Trauma() {
  return (
    <div>
      {/* <!-- About gynocologist --> */}
    <div className="text-[40px] font-bold  text-center">
        <div className="relative ">
            <img src={jointAndBone} alt="img" />
            <h1
                className="absolute text-[60px] bottom-10 font-2xl  left-10 text-white xs:font-xl xs:text-[40px] xs:top-8  ">
                Trauma
            </h1>

        </div>
        <h1>About Trauma</h1>
    </div>
    <p className="text-[20px] text-center">A significant bodily or psychological injury or shock brought on by an outside
        force or incident is referred to as a trauma. It might be brought on by mishaps, violence, calamities, or other
        traumatic events. An individual's physical health, emotional health, and overall functioning can all be
        significantly impacted by trauma.

        The concept of trauma has applications in a variety of domains, including:
        <br/>

        Trauma refers in the medical context to bodily wounds brought on by mishaps or emergencies that call for quick
        medical intervention. Trauma centres are specialised medical establishments outfitted to offer thorough care to
        patients with serious injuries, such as those brought on by car accidents, slips and falls, or gunshot wounds.
        In trauma centres, medical staff use a multidisciplinary strategy to stabilise patients, carry out life-saving
        measures, and start necessary treatments.Trauma is normally treated through a variety of therapy techniques and
        interventions delivered by qualified experts. Here are some of the instruments and methods frequently employed
        in trauma treatment:
        <br/>
        Psychotherapy is a key component of trauma treatment and is sometimes referred to as talk therapy. Several
        strategies could be applied, such as:

        <br/>
        Trauma-focused therapy: This method focuses on the effects of trauma and aids victims in processing and
        integrating their ordeals. Eye Movement Desensitisation and Reprocessing (EMDR), Cognitive Processing Therapy
        (CPT), and Prolonged Exposure (PE) therapy are a few examples of trauma-focused treatments.
        <br/>
        Cognitive-Behavioral Therapy (CBT): CBT aims to identify and change unfavourable attitudes, convictions, and
        actions connected to trauma. It assists people in creating coping mechanisms, controlling uncomfortable
        sensations, and challenging incorrect thought patterns.
    </p>
    </div>
  )
}

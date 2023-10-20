import React from 'react'
import jointAndBone from '../images/joint and bones.jpg'

export default function Physiotherapy() {
  return (
    <div>
      <div className="text-[40px] font-bold  text-center">
        <div className="relative ">
            <img src={jointAndBone} alt="img" />
            <h1 className="absolute text-[60px] font-2xl text-white bottom-14 left-10 xs:font-xl xs:text-[40px] xs:top-8  ">
                Physiotherapy
            </h1>

        </div>
        <h1>About Physiotherpy</h1>
    </div>
    <p className="text-[20px] text-center">Physical therapy, commonly known as physiotherapy, is a medical specialty that
        aims to enhance and restore movement, function, and quality of life in people who have been injured, ill, or
        disabled. Physical therapists, often known as physiotherapists, employ a range of methods and interventions to
        encourage physical healing, manage pain, and improve general wellbeing.Physiotherapy is utilised in many
        different contexts and for a variety of ailments, such as:
        <br/>
        Rehabilitation: When someone is recovering from an injury, surgery, or a crippling illness, physical therapy is
        crucial. In the aftermath of fractures, joint replacements, or neurological diseases like stroke or spinal cord
        injuries, it is frequently utilised to regain strength, movement, and flexibility.

        <br/>
        Sports medicine: To prevent and treat sports-related injuries, athletes frequently need physiotherapy. Sports
        injuries include sprains, strains, muscular imbalances, and overuse injuries are assessed, treated, and rehabbed
        by physiotherapists. Additionally, they create customised workout plans to improve athletic performance and
        stave off any injuries.The following methods may be combined as part of physiotherapy treatment:
        <br/>
        Manual therapy: To increase joint and tissue mobility, lessen discomfort, and improve physical function,
        physiotherapists utilise hands-on techniques such joint mobilisation, soft tissue mobilisation, and
        manipulation.
        <br/>

        Exercise for therapeutic purposes: Specialised workout plans are created to increase stamina, flexibility,
        endurance, and balance. These exercises support tissue healing, increase functional movement, and help guard
        against future injuries.
        <br/>
        Electrotherapy: A number of electrotherapy techniques, including electrical stimulation, ultrasound, and laser
        therapy, can be used to reduce pain, enhance tissue repair, and reduce inflammation.
        <br/>
        Application of heat or cold using methods like hot packs or ice packs can help reduce discomfort, swelling, and
        speed up the healing process.
    </p>

    </div>
  )
}

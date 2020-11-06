import React, { Component } from 'react'
import $ from 'jquery'
import uk from '../public/img/uk.svg'
import fr from '../public/img/france.svg'
import styles from './Adhd.module.scss'

class Adhd extends Component {
  componentDidMount() {
    window.document.getElementById('french').onclick = () => {
      //play(flagS)
      $('.english').hide()
      $('.spanish').hide()
      $('.french').hide()
      $('.french').fadeIn()
    }
    window.document.getElementById('english').onclick = () => {
      //play(flagS)
      $('.french').hide()
      $('.spanish').hide()
      $('.english').hide()
      $('.english').fadeIn()
    }
    $("#intro").removeClass("css3buttonRed")
    $("#intro").addClass("css3button")
    $("#adhd").addClass("css3buttonRed")
    $("#adhd").removeClass("css3button")
    $("li").eq(3).css({
      "background-color": "violet",
      color: "black",
      "font-weight": "900",
    })
    $("li").eq(4).css({
      "background-color": "red",
      color: "black",
      "font-weight": "900",
    })
    $("li").eq(5).css({
      "background-color": "orange",
      color: "black",
      "font-weight": "900",
    })
    $("li").eq(6).css({
      "background-color": "yellow",
      color: "black",
      "font-weight": "900",
    })
    $("li").eq(7).css({
      "background-color": "green",
      color: "white",
      "font-weight": "500",
    })
    $("li").eq(8).css({
      "background-color": "blue",
      color: "white",
      "font-weight": "500",
    })
    $("li").eq(9).css({
      "background-color": "indigo",
      color: "white",
      "font-weight": "500",
    })
    $("li").eq(10).css("background-color", "violet");
    $("li").eq(11).css({
      "background-color": "red",
      color: "black",
      "font-weight": "900",
    })
    $("li").eq(12).css({
      "background-color": "orange",
      color: "black",
      "font-weight": "900",
    })
    $("li").eq(13).css({
      "background-color": "yellow",
      color: "black",
      "font-weight": "900",
    })
    $("li").eq(14).css({
      "background-color": "green",
      color: "white",
      "font-weight": "500",
    })
    $("li").eq(15).css({
      "background-color": "blue",
      color: "white",
      "font-weight": "500",
    })
    $("li").eq(16).css({
      "background-color": "indigo",
      color: "white",
      "font-weight": "500",
    })
  }
  render() {
    return (
      <div>
        <div className="metoo">
          <h1 className="english">ADHD and High IQ</h1>
          <h1 className="french">TDAH et haut potentiel</h1>
        </div>
        <p className="flags">
          <img id="english" className="imgFlag" src={uk} alt="English" height="30" />
          <img id="french" className='imgFlag' src={fr} alt="Français" height="30" />
        </p>
        <div className="auteurs english">
          Written by: Lynn-nore Chittom
        <br />
          Edited by: Daniel P. McGoldrick
        <br />
          PhD Genome Sciences University of Washington Seattle
        <br />
          Updated: 25/05/2011
      </div>
        <div className="auteurs french">Ecrit par: Lynn-nore Chittom
        <br />
          Edité par: Daniel P. McGoldrick
        <br />
          Professeur en Sciences Génétiques University of Washington Seattle
        <br />
          Mis à jour: 25/05/2011
        <br />
          Traduit par: Mikael Garcia le 23/05/2020
      </div>
        <div className="competen">
          <div className="metoo">
            <h3 className="english">What is the Connection</h3>
            <h3 className="french">Quels liens</h3>
          </div>
          <span className="english">Parents sometimes wonder if their children can have both ADHD and High IQ levels. The answer is &nbsp;they can, and they often do. </span>
          <span className="french">Des parents se demandent parfois si leurs enfants peuvent être à la fois Haut Potentiel (HP) et hyperactif (TDAH). La réponse est oui et c'est souvent le cas.</span>
          <br />
          <span className="english">Read on for answers to common questions about the relationship between ADHD and intelligence.</span>
          <span className="french">Poursuivez la lecture pour des réponses aux principales questions sur les liens entre TDAH et intelligence.</span>
          <br />
          <span className="english">
            Masked, But Still There Some children with ADHD have also been
            gifted with a high IQ. Unfortunately, this does not actually negate
            the symptoms of the ADHD, though it may mask them for a while and
          make the diagnosis more difficult.</span>
          <span className="french">
            Invisible mais bien présent, il existe des enfants qui ont un TDAH
            et un QI élevé. Malheureusement, cette intelligence ne compense pas
            le trouble du déficit de l'attention avec hyperactivité bien qu'elle
          le camoufle un certain temps, ce qui complique ce diagnostique.</span>
          <br />
          <span className="english">Typically
          gifted children demonstrate a complicated combination of
          symptoms which represent both their giftedness and their ADHD. This
          may include perceptions or reasoning skills beyond their age, along
          with a propensity toward hyperactivity. Or it may be demonstrated in
          early reading and tremendous ease with learning, combined with
          extremely poor social skills.</span>
          <span className="french">Souvent, les enfants à hauts potentiels souffrent
          d'une combinaison
          compliquée de symptômes dont la source est leur haut potentiel ainsi
          que le TDAH. Celle-ci peut inclure des capacités de perception ou de
          raisonnement au-delà de leur âge, avec une tendance naturelle vers
          l'hyperactivité. Ou alors, elle se remarque par l'apprentissage
          précoce de la lecture, de surprenantes facilités d'apprentissages,
          combinées à de très pauvres capacités sociales.</span>
          <br />
          <span className="english">Regardless of their intelligence, for children to be diagnosed with ADHD they must present symptoms from the following list for at least six months and symptoms must appear prior to age seven:</span>
          <span className="french">En dépit de leur intelligence, les enfants sont peut-être concernés par le TDAH s'ils présentent des symptômes de la liste suivante pendant plus de six mois avant l'âge de 7ans :</span>
          <br />
          <ul className={styles.ul}>
            <li>
              <span className="english">Inability to sustain focus</span>
              <span className="french">Incapacité à maintenir
              l'attention</span>
            </li>
            <li>
              <span className="english">Distractability</span>
              <span className="french">Distractibilité</span>
            </li>
            <li>
              <span className="english">Difficulty completing assignments</span>
              <span className="french">Difficulté à terminer certaines consignes</span>
            </li>
            <li>
              <span className="english">Forgetfulness</span>
              <span className="french">Distraction</span>
            </li>
            <li>
              <span className="english">Frequent shifts in conversation</span>
              <span className="french">Changements de conversations fréquents</span>
            </li>
            <li>
              <span className="english">Hyperfocusing on activities of interest to the point of ignoring other responsibilities</span>
              <span className="french">Hyper-Concentration sur des activités qui l'intéresse au point d'ignorer d'autres responsabilités</span>
            </li>
            <li>
              <span className="english">Lack of organizational skills</span>
              <span className="french">Défault de capacité organisationnelle</span>
            </li>
            <li>
              <span className="english">Fidgeting or squirming</span>
              <span className="french">Agitation ou tortillements</span>
            </li>
            <li>
              <span className="english">Frequently hopping up out of their chairs</span>
              <span className="french">Bondissements fréquents hors de leur chaise</span>
            </li>
            <li>
              <span className="english">Running or climbing at inappropriate times and in inappropriate places</span>
              <span className="french">Courent ou escaladent dans des endroits et à des moments inappropriés</span>
            </li>
            <li>
              <span className="english">Inability to sit still or play quietly</span>
              <span className="french">Incapacité à rester assis immobile ou à jouer calmement</span>
            </li>
            <li>
              <span className="english">Excessive talking</span>
              <span className="french">Bavardages excessifs</span>
            </li>
            <li>
              <span className="english">Impulsivity</span>
              <span className="french">Impulsivité</span>
            </li>
          </ul>
        </div>
        <div className="competen">
          <div className="metoo">
            <h3 className="english">How the ADHD Hides</h3>
            <h3 className="french">Comment le TDAH se camoufle</h3>
          </div>
          <span className="english">Children with high IQ levels are often able to circumvent detection
          of their ADHD if it is not caught early.</span>
          <span className="french">Les enfants au QI élevé sont souvent capables de duper la détection
          de leur TDAH s'ils ne sont pas détectés précocement.</span>
          <br />
          <span className="english">By school time they are very capable of figuring out assignments
          even if they did not hear the directions.</span>
          <span className="french">En milieu scolaire ils sont souvent capables de suivre les consignes même s'ils n'entendent pas les instructions.</span><br /><span className="english">Similarly they may be
          able to learn independently and catch up despite distractability, excessive talking or fidgeting in the
          classroom.</span>
          <span className="french">Ils sont également capables d'apprendre seul et d'acquérir les
          notions malgré la distraction, les bavardages ou l'agitation en
          classe.</span>
          <br />
          <span className="english">Unfortunately, the ADHD eventually catches up with them as
          classwork becomes more challenging and teachers depend more on
          students being organized, self-motivated and attentive.</span>
          <span className="french">Malheureusement, le TDAH
          les rattrape parfois quand les devoirs
          deviennent plus compliqués et que les professeurs demandent
          davantage aux étudiants en termes d'organisation et de
          concentration.</span>
          <br />
          <span className="english">At this point the ADHD may appear to come out of nowhere for
          children who have masked it under their high intelligence.</span>
          <span className="french">Au point que le TDAH
          risque d'apparaître comme sorti de nulle part
          pour les enfants qui l'ont masqué sous leur grande
          intelligence.</span>
          <br />
          <span className="english">Symptoms that May Appear Later in Life Individuals with ADHD
          and
          high intelligence sometimes manage to maneuver their way through
          school riding on their intellect alone. They work their teachers and
          the system and charm their way to success by applying themselves as
          needed, despite their limitations.</span>
          <span className="french">Les signes risquent d'apparaître plus tard dans
          la vie des individus présentant à la fois un TDAH et une forte intelligence qui
          parfois gèrent pour manœuvrer leur chemin à travers l'école en
          surfant seulement sur leur capacité à comprendre. Ils manipulent
          leurs professeurs, le système et réussissent sans embûches en
          s'impliquant suffisamment, malgré leurs limites.</span>
          <br />
          <span className="english">During school years, the
          ADHD may go undetected and symptoms may be
          attributed to boredom or defiance. Outside of school it becomes
          obvious that these individuals have difficulties with short term
          memory and basic functioning skills. They may find themselves
          multi-tasking to a fault, having difficulties sleeping due to
          hyperactivity, or struggling to remain organized or on-task. These
          symptoms can present themselves at any time, but that does not mean
          they are new symptoms.</span>
          <span className="french">Pendant la scolarité, le TDAH risque de rester invisible et
          les
          troubles comportementaux attribués à de l'ennui ou de la
          provocation. Sorti du système scolaire, il devient alors évident que
          ces individus ont des difficultés avec la mémoire à court terme et
          certaines aptitudes fonctionnelles basiques. Ils risquent alors de
          jongler avec les tâches à l'extrême, d'avoir des problèmes de
          sommeil à cause de l'hyperactivité ou bien de lutter pour rester
          organisé/concentré sur une tâche. Ces symptômes peuvent survenir à
          n'importe quel moment, mais cela ne veut pas dire qu'il s'agisse de
          nouveaux symptômes.</span>
          <br />
          <span className="english">ADHD is a genetic neuropsychological disorder, and is
          not an
          adult-onset disorder.</span>
          <span className="french">Un TDAH est un trouble neuropsychologique génétique, et non
          un
          trouble qui survient chez l'adulte.</span>
          <br />
          <span className="english">When symptoms seem to appear later in
          life, individuals may
          initially deny their ADHD, but often eventually decide to pursue
          treatment on their own.</span>
          <span className="french">Lorsque les symptômes semblent intervenir plus tard dans
          leur vie,
          ils risquent dans un premier temps de nier leur TDAH, mais souvent
          décident éventuellement de poursuivre un traitement
          d'eux-mêmes.</span>
          <br />
          <span className="english">Medication can be effective, even if they did not treat their
          ADHD
          in this way during childhood or adolescence.</span>
          <span className="french">Des médicaments peuvent fonctionner,
          même s'ils n'en n'ont pas pris
          durant l'enfance ou l'adolescence.</span>
          <br />
          <span className="english">The most popular treatment options for
          adults with ADHD and High IQ
          are stimulant drugs which reduce their symptoms and enable their
          high intelligence to shine.</span>
          <span className="french">Un des choix de traitement les plus courant pour les
          adultes avec un TDAH sont des médicaments stimulants qui réduisent leurs
          symptômes et permettent alors à leur haute intelligence de
          briller.</span>
        </div>
        <div className="competen">
          <h3 className="metoo">References</h3>
          <a className="refs" rel="preconnect"
            href="http://psychcentral.com/news/2009/05/25/high-iq-offers-no-protection-from-adhd-effects/6074.html">http://psychcentral.com/news/2009/05/25/high-iq-offers-no-protection-from-adhd-effects/6074.html</a>
          <a className="refs" rel="preconnect"
            href="http://www.webmd.com/add-adhd/guide/adhd-symptoms">http://www.webmd.com/add-adhd/guide/adhd-symptoms
        </a>
        </div>
      </div>
    )
  }
}

export default Adhd
/**
 * Created by zongy on 05-03-2017.
 */
import {IMousserende, IHvidvin, IRosevin, IRoedvin} from "./vinkort-interface";

export const MOUSSERDATA:IMousserende[] = [
  {
    name: "Moscato Bianco Felipetti",
    country: "Italien",
    description: "Mousserende vin med lidt sødme. Duft og smag har dejlige aromaer af Moscato druen. Vinen udviser god balance mellem sødme og friskheden, som frugterne og boblere giver.",
    price: 195
  },
  {
    name: "Moët Chandon",
    country: "Frankrig",
    description: "Flagskibet Brut Impérial er i centrum i Moët & Chandons sortiment. Livlig og gavmild champagne, der kan serveres som en Aperitif til velkomst, hygge eller fiskeretter.",
    price: 649
  }
]

export const HVIDVINDATA:IHvidvin[] = [
  {
    name: "Coral Coast Chardonnay",
    country: "Australien",
    description: "Dejlige friske aromaer af pære og grønne æbler samt tropiske frugter i næsen. I ganen opleves en god balance og afrundet frisk mundfylde.",
    glas: "Glas 55,-",
    price: 198
  },
  {
    name: "Circe Verdejo Rueda Avelino Vegas",
    country: "Spanien",
    description: "Fantastisk frugtrig vin med lidt tropiske friske frugter. Vinen har en strågul lys farve. I næsen viser den aromaer af eksotiske frugter og hvide blomster. I munden er den frisk og med en duftende, lang eftersmag.",
    glas: null,
    price: 249
  },
  {
    name: "Rabbit Island Sauvignon Blanc",
    country: "New Zealand - Seifried Estate",
    description: "Duften er intens og forfriskende af tropisk frugt som Guava og stikkelsbær, grapefrugt og underliggende minderalske noter. I smagen er der et stort spektrum af smagsnuancer. Frisk sprød vin med en fin balance.",
    glas: null,
    price: 279
  }
]

export const ROSEDATA:IRosevin[] = [
  {
    name: "Zeni FZ Bardolino Chiaretto Rosé Classico Doc",
    country: "Italien,",
    description: "Frugtagtig og kompleks rosévin med masser af mineralitet. I duften findes nuancer af ferskner, blommer, lidt roser og eftersmag af hindbær. Smagen har en lækker friskhed og finesse, der slutter meget rent og sprødt med et let sødmepræg.",
    glas: "Glas 65,-",
    price: 225
  },
  {
    name: "Boland Cellar Rosé [sødlig]",
    country: "Sydafrika",
    description: "Frugtagtig flot rosévin  perfekt balance og med en let sødlig smag, der gør vinen velegnet all round.",
    glas: null,
    price: 198
  }
]
export const ROEDVINDATA:IRoedvin[] = [
  {
    name: "Coral Coast Shiraz",
    country: "Australien",
    description: "Vienen har aromaer af modne solbær, rabarber, mørke bær og lidt krydrede undertoner af sort peber. Den er fyldig og cremet i smagen, har bløde tanniner, en fyldig krop samt en dejlig lang eftersmag.",
    glas: "Glas 55,-",
    price: 198
  },
  {
    name: "The Undercover",
    country: "Australien",
    description: "Ren og moden Shiraz med en intens bouquet, der efterfølges af fantastiske smagsnuancer, blandt andet solbær og brombær og frisk sødme med lækre toner af krydderier samt en blød fadstil.",
    glas: "Glas 60,-",
    price: 219
  },
  {
    name: "Governo All Uso, Gerone - Rosso Toscano",
    country: "Italien",
    description: "Fantastisk frugtrig vin med noter af modne kirsebær, skovbær og krydrede nelliker, der giver en unik bouquet. En koncentreret vin med kompleksitet og fylde.",
    glas: null,
    price: 249
  },
  {
    name: "CMC Zeni Appassimento Igt",
    country: "Italien",
    description: "Meget frugtrig, saftig og kraftig rødvin med en flot, lang, rund smag af modne mørke bær, krydderurter, lidt mørk toast, vanilje og lidt lækker rosin frugtsødme. Vinen er flot balanceret mellem modne bær og en svag sødme fra smagen af overmodne blommer. Den har en lækker, fyldig krop og er lidt krydret i eftersmagen.",
    glas: null,
    price: 279
  },
  {
    name: "Pascual Toso Malbec Selected [Reserva]",
    country: "Argentina",
    description: "Fantastisk Malbec i højklasse - blød, kraftig, fed og cremet. Duften er aromatisk med noter af modne blommer, vanilje og krydderier fra 12 måneders modning på fade. Vinen er blød og perfekt afrundet med fløjlsagtige tanniner.",
    glas: null,
    price: 298
  },
  {
    name: "Amarone FZ Zeni DOCG",
    country: "Italien - Della Valpolicella Classico",
    description: "Vinen har en flot dyb rubinrød farve og en levende og frugtagtig bouquet, med antydninger af røde frugter og krydderier. Smagen er fjøjlsagtig og perfekt afrundet.",
    glas: null,
    price: 399
  },
  {
    name: "Brunelli Amarone Inferi Riserva [Topklasse]",
    country: "Italien - Classico",
    description: "Top Amarone når det er bedst. Den raffinerede og meget elegante bouquet er præget af sød kakao og ristet kaffe. Smagen er varm og rund, minder om smeltet chokolade og syltede kirsebær i brandy, fyldig og silkeagtig. Eftersmagen er rig og vedvarende.",
    glas: null,
    price: 625
  },
  {
    name: "Portvin Maynards 10 års Tawny",
    country: "Italien - Classico",
    description: "Denne velskabte blended Tawny er nøddebrun med cremet fylde, puddersukker og letrøget sødme med et diskret bid i finalen.",
    glas: "Glas 55,-",
    price: 298
  }
]

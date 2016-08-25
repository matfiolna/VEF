//1.Hvað er ECMAScript?

EcmaScript er staðall fyrir forskriftarþarfir tungumál. Það skilgreinir helstu þáttum sem forskriftarþarfir tungumál ætti veita og hvernig þær aðgerðir ættu að koma til framkvæmda


//2. Afhverju að nota === fremur en == í JavaScript? 

Vegna þess þegar maður notar == það JS gerir ekki conversion (hann tékkar ekki hvort gildi sem þú ert að setja inn er sama og ef er ekki, þá skilar hann bara true eða false)

//3.Hvað kemur út og hvaða type (sjá typeof operator)?

í "+" bæta upp fyrir hvert annað og svar er ekki stærðfræðileg heldur skriflegt, en * er margfalda eins og án "" táknum.

//4. Hvað eru margar global breytur í kóðanum? 

2 (text og sum)

//5. Hver er munurinn á A og B? Útskýrðu hvað “use strict“ gerir. 

A keyrir og B keyrir ekki. Use strict er til að tékka hvort alla breytur eru rétt skrifað, td:
msg = “msg” undir use strict er false
var msg;
msg = “msg” er true.

//6. Hver er munurinn á null og undefined í notkun? 

Ef breyta með undeifined er óskilgreind þá skilar hún error ef hún er notuð.


//8. Hver er munurinn á for of, forEach og for in lykkju. Komdu með dæmi? 

forEach er notað bara í array object.
for in fyrir properities ínní object.

//9. Hvað er NaN og afhverju er eftirfarandi false? 

NaN er Not-a-Number, sem þýðir að gildi er ekki tala. NaN er eina hluti í javascript sem er ekki jafn sjálfa sig. 


//10. Hvað birtist (úttak)? Útskýrðu hversvegna. 

|| er “OR” í javascript og þetta er operator sem velja 1 af 2 möguleikar og hann takur fyrsta ef hún er ekki false eða null.  Forrit í dæminu á að velja milli null og orð “user”, en vegna þess fyrsta gildi er null, þá skrifar hann út user.


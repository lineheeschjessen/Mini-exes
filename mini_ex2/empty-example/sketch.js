var img;
var img2;

function preload () {
img = loadImage("Hund.jpg");
img2 = loadImage("Natur.jpg");
}

function setup() {
  // put setup code here
  createCanvas(1280,720)
}

function draw() {
  // put drawing code here
//image(img,50,50);
image(img2,0,0);

//Hale på hunden
strokeWeight(2);
stroke(198);
fill(234,225,225);
beginShape();
curveVertex(287, 456);
curveVertex(291, 456);
curveVertex(242, 386);
curveVertex(271, 367);
curveVertex(282, 318);
curveVertex(256, 296);
curveVertex(235, 296);
curveVertex(211, 301);
curveVertex(172, 342);
curveVertex(166, 414);
curveVertex(164, 424);
curveVertex(189, 483);
curveVertex(198, 496);
curveVertex(243, 551);
curveVertex(247, 552);
curveVertex(252, 514);
curveVertex(257, 506);
curveVertex(271, 480);
endShape(CLOSE);

//kroppen på hunden
fill(234,225,225);
beginShape();
curveVertex(248, 558);
curveVertex(245, 598);
curveVertex(250, 618);
curveVertex(243, 648);
curveVertex(247, 676);
curveVertex(253, 700);
curveVertex(263, 721);
curveVertex(276, 744);
curveVertex(292, 759);
curveVertex(311, 774);
curveVertex(330, 797);
curveVertex(362, 809);
curveVertex(389, 806);
curveVertex(395, 792);
curveVertex(400, 781);
curveVertex(393, 777);
curveVertex(390, 776);
curveVertex(401, 783);
curveVertex(417, 769);
curveVertex(422, 768);
curveVertex(428, 746);
curveVertex(429, 741);
curveVertex(428, 728);
curveVertex(427, 721);
curveVertex(422, 718);
curveVertex(418, 710);
curveVertex(405, 700);
curveVertex(423, 718);
curveVertex(437, 716);
curveVertex(441, 711);
curveVertex(445, 703);
curveVertex(444, 694);
curveVertex(440, 680);
curveVertex(436, 672);
curveVertex(429, 670);
curveVertex(419, 664);
curveVertex(420, 666);
curveVertex(417, 665);
curveVertex(392, 664);
curveVertex(406, 662);
curveVertex(405, 652);
curveVertex(400, 645);
curveVertex(379, 618);
curveVertex(361, 611);
curveVertex(357, 611);
curveVertex(338, 602);
curveVertex(377, 615);
curveVertex(395, 635);
curveVertex(405, 652);
curveVertex(408, 663);
curveVertex(438, 674);
curveVertex(453, 669);
curveVertex(473, 666);
curveVertex(480, 653);
curveVertex(489, 640);
curveVertex(494, 630);
curveVertex(498, 623);
curveVertex(512, 613);
curveVertex(520, 605);
curveVertex(534, 595);
curveVertex(547, 588);
curveVertex(549, 583);
curveVertex(567, 580);
curveVertex(564, 571);
curveVertex(563, 560);
curveVertex(559, 555);
curveVertex(556, 549);
curveVertex(556, 541);
curveVertex(557, 530);
curveVertex(559, 524);
curveVertex(563, 517);
curveVertex(566, 513);
curveVertex(557, 539);
curveVertex(557, 552);
curveVertex(565, 565);
curveVertex(570, 580);
curveVertex(577, 592);
curveVertex(586, 601);
curveVertex(588, 604);
curveVertex(595, 581);
curveVertex(591, 593);
curveVertex(593, 632);
curveVertex(593, 633);
curveVertex(601, 644);
curveVertex(621, 645);
curveVertex(643, 641);
curveVertex(645, 638);
curveVertex(655, 632);
curveVertex(657, 629);
curveVertex(661, 618);
curveVertex(660, 614);
curveVertex(661, 604);
curveVertex(659, 594);
curveVertex(659, 589);
curveVertex(661, 609);
curveVertex(661, 621);
curveVertex(660, 630);
curveVertex(677, 636);
curveVertex(691, 632);
curveVertex(700, 628);
curveVertex(709, 618);
curveVertex(715, 612);
curveVertex(714, 601);
curveVertex(714, 595);
curveVertex(712, 585);
curveVertex(711, 579);
curveVertex(705, 573);
curveVertex(696, 566);
curveVertex(696, 562);
curveVertex(690, 557);
curveVertex(691, 560);
curveVertex(689, 549);
curveVertex(697, 562);
curveVertex(704, 573);
curveVertex(712, 583);
curveVertex(714, 593);
curveVertex(723, 590);
curveVertex(728, 585);
curveVertex(731, 579);
curveVertex(731, 566);
curveVertex(730, 560);
curveVertex(722, 542);
curveVertex(682, 528);
curveVertex(648, 474);
curveVertex(564, 458);
curveVertex(535, 471);
curveVertex(543, 465);
curveVertex(508, 480);
curveVertex(480, 478);
curveVertex(444, 463);
curveVertex(427, 443);
curveVertex(418, 422);
curveVertex(421, 403);
curveVertex(421, 399);
curveVertex(424, 393);
curveVertex(359, 411);
curveVertex(291, 453);
curveVertex(257, 507);
curveVertex(246, 600);
endShape(CLOSE);

//Hoved på hunden
strokeWeight(2);
fill(234,225,225);
beginShape();
curveVertex(426, 395);
curveVertex(438, 364);
curveVertex(458, 324);
curveVertex(470, 286);
curveVertex(477, 248);
curveVertex(473, 216);
curveVertex(465, 189);
curveVertex(475, 163);
curveVertex(562, 107);
curveVertex(585, 104);
curveVertex(611, 125);
curveVertex(612, 117);
curveVertex(656, 96);
curveVertex(716, 85);
curveVertex(830, 108);
curveVertex(851, 132);
curveVertex(856, 156);
curveVertex(855, 165);
curveVertex(861, 175);
curveVertex(867, 189);
curveVertex(868, 190);
curveVertex(869, 204);
curveVertex(871, 214);
curveVertex(870, 223);
curveVertex(887, 228);
curveVertex(896, 231);
curveVertex(907, 240);
curveVertex(914, 258);
curveVertex(917, 271);
curveVertex(917, 286);
curveVertex(912, 312);
curveVertex(908, 322);
curveVertex(901, 338);
curveVertex(886, 345);
curveVertex(889, 345);
curveVertex(880, 340);
curveVertex(872, 339);
curveVertex(865, 343);
curveVertex(863, 343);
curveVertex(853, 349);
curveVertex(854, 348);
curveVertex(842, 367);
curveVertex(835, 373);
curveVertex(826, 379);
curveVertex(814, 387);
curveVertex(811, 389);
curveVertex(799, 389);
curveVertex(791, 389);
curveVertex(778, 384);
curveVertex(762, 377);
curveVertex(768, 385);
curveVertex(791, 392);
curveVertex(773, 398);
curveVertex(759, 410);
curveVertex(749, 417);
curveVertex(727, 427);
curveVertex(718, 432);
curveVertex(681, 435);
curveVertex(658, 432);
curveVertex(633, 422);
curveVertex(595, 401);
curveVertex(593, 406);
curveVertex(581, 422);
curveVertex(558, 450);
curveVertex(543, 463);
curveVertex(521, 477);
curveVertex(501, 482);
curveVertex(485, 482);
curveVertex(452, 469);
curveVertex(423, 436);
endShape(CLOSE);

//øredetalje
strokeWeight(2)
beginShape();
curveVertex(595, 403);
curveVertex(594, 401);
curveVertex(606, 372);
curveVertex(609, 349);
curveVertex(603, 323);
curveVertex(597, 296);
curveVertex(594, 276);
curveVertex(596, 249);
curveVertex(595, 236);
curveVertex(590, 216);
curveVertex(586, 170);
curveVertex(595, 150);
endShape();

//øredetalje 2
strokeWeight(2)
beginShape();
vertex(428, 395);
vertex(439, 366);
endShape();

//halsbånd
strokeWeight(3)
fill(110,6,6)
beginShape();
curveVertex(596, 403);
curveVertex(597, 403);
curveVertex(619, 415);
curveVertex(654, 433);
curveVertex(691, 437);
curveVertex(722, 433);
curveVertex(756, 415);
curveVertex(757, 440);
curveVertex(744, 452);
curveVertex(716, 467);
curveVertex(692, 473);
curveVertex(652, 466);
curveVertex(577, 433);
endShape(CLOSE);

//bagerste øre
strokeWeight(2)
fill(234,225,225)
beginShape();
curveVertex(713, 86);
curveVertex(732, 73);
curveVertex(748, 52);
curveVertex(759, 47);
curveVertex(781, 54);
curveVertex(812, 66);
curveVertex(837, 75);
curveVertex(867, 88);
curveVertex(877, 107);
curveVertex(872, 131);
curveVertex(872, 159);
curveVertex(867, 189);
curveVertex(866, 180);
curveVertex(856, 167);
curveVertex(857, 163);
curveVertex(857, 152);
curveVertex(857, 144);
curveVertex(851, 131);
curveVertex(850, 127);
curveVertex(846, 117);
curveVertex(844, 115);
curveVertex(834, 111);
curveVertex(798, 102);
curveVertex(751, 90);
endShape(CLOSE);

//bagerste øre detalje
strokeWeight(2)
noFill(222,184,135)
beginShape();
vertex(835, 113);
vertex(845, 94);
vertex(856, 95)
vertex(865, 99);
endShape();

//bagerste øre detalje
strokeWeight(2)
noFill(222,184,135)
beginShape();
vertex(715, 87);
vertex(732, 74)
endShape();

//mundvige
strokeWeight(2)
fill(234,225,225)
beginShape();
curveVertex(881, 343);
curveVertex(876, 340);
curveVertex(866, 344);
curveVertex(856, 349);
curveVertex(847, 364);
curveVertex(838, 372);
curveVertex(820, 385);
curveVertex(840, 385);
curveVertex(867, 375);
curveVertex(882, 359);
curveVertex(883, 344);
endShape(CLOSE);

//øje venstre
fill(250)
beginShape();
curveVertex(724, 288);
curveVertex(724, 288);
curveVertex(696, 288);
curveVertex(681, 281);
curveVertex(678, 269);
curveVertex(679, 242);
curveVertex(687, 224);
curveVertex(696, 212);
curveVertex(714, 202);
curveVertex(728, 207);
curveVertex(744, 220);
curveVertex(752, 238);
curveVertex(753, 257);
curveVertex(754, 266);
curveVertex(742, 279);
endShape(CLOSE);

//øjenvipper venstre
fill(0)
beginShape();
curveVertex(682, 234);
curveVertex(693, 205);
curveVertex(716, 190);
curveVertex(732, 187);
curveVertex(747, 191);
curveVertex(728, 208);
curveVertex(725, 208);
curveVertex(713, 207);
curveVertex(702, 212);
endShape(CLOSE);

//pupil venstre
fill(0)
beginShape();
curveVertex(742, 219);
curveVertex(722, 219);
curveVertex(713, 229);
curveVertex(710, 245);
curveVertex(712, 260);
curveVertex(727, 276);
curveVertex(737, 280);
curveVertex(751, 275);
curveVertex(755, 252);
curveVertex(753, 235);
endShape(CLOSE);

//øje højre
fill(250)
beginShape();
curveVertex(846, 226);
curveVertex(846, 226);
curveVertex(833, 217);
curveVertex(829, 205);
curveVertex(824, 191);
curveVertex(824, 174);
curveVertex(831, 161);
curveVertex(842, 157);
curveVertex(853, 163);
curveVertex(860, 173);
curveVertex(866, 186);
curveVertex(869, 200);
curveVertex(869, 210);
curveVertex(871, 218);
curveVertex(867, 225);
curveVertex(859, 223);
curveVertex(844, 227);
curveVertex(838, 229);
curveVertex(846, 226);
endShape(CLOSE);

//øjenvipper højre
fill(0)
beginShape();
curveVertex(824, 180);
curveVertex(819, 160);
curveVertex(827, 155);
curveVertex(839, 156);
curveVertex(847, 156);
curveVertex(856, 163);
curveVertex(855, 164);
curveVertex(845, 163);
curveVertex(833, 168);
endShape(CLOSE);

//pupil højre
fill(0)
beginShape();
curveVertex(830, 208);
curveVertex(827, 195);
curveVertex(831, 180);
curveVertex(838, 176);
curveVertex(848, 175);
curveVertex(857, 182);
curveVertex(864, 192);
curveVertex(865, 204);
curveVertex(865, 216);
curveVertex(864, 224);
curveVertex(855, 226);
curveVertex(844, 228);
endShape(CLOSE);

//snude
fill(0)
beginShape();
curveVertex(838, 317);
curveVertex(817, 293);
curveVertex(819, 266);
curveVertex(833, 250);
curveVertex(851, 242);
curveVertex(875, 236);
curveVertex(893, 242);
curveVertex(904, 252);
curveVertex(907, 268);
curveVertex(905, 284);
curveVertex(900, 301);
curveVertex(888, 315);
curveVertex(876, 322);
curveVertex(859, 322);
endShape(CLOSE);

//snude glimt
fill(250)
beginShape();
curveVertex(846, 269);
curveVertex(857, 259);
curveVertex(873, 255);
curveVertex(884, 253);
curveVertex(896, 258);
curveVertex(891, 267);
curveVertex(872, 274);
curveVertex(856, 275);
endShape(CLOSE);

//højre øre forneden
strokeWeight(2)
fill(234,225,225)
beginShape();
curveVertex(886, 347);
curveVertex(894, 371);
curveVertex(896, 377);
curveVertex(894, 397);
curveVertex(888, 417);
curveVertex(877, 427);
curveVertex(859, 444);
curveVertex(837, 455);
curveVertex(810, 456);
curveVertex(786, 453);
curveVertex(775, 442);
curveVertex(761, 436);
curveVertex(760, 435);
curveVertex(759, 424);
curveVertex(760, 419);
curveVertex(757, 414);
curveVertex(763, 407);
curveVertex(774, 398);
curveVertex(790, 394);
curveVertex(813, 392);
curveVertex(816, 389);
curveVertex(845, 386);
curveVertex(871, 374);
endShape(CLOSE);

//højre forpote
strokeWeight(2)
fill(234,225,225)
beginShape();
curveVertex(798, 456);
curveVertex(828, 461);
curveVertex(844, 472);
curveVertex(862, 490);
curveVertex(871, 512);
curveVertex(869, 546);
curveVertex(859, 579);
curveVertex(841, 590);
curveVertex(827, 597);
curveVertex(814, 593);
curveVertex(805, 589);
curveVertex(808, 584);
curveVertex(799, 595);
curveVertex(780, 597);
curveVertex(765, 591);
curveVertex(756, 584);
curveVertex(750, 573);
curveVertex(733, 571);
curveVertex(733, 569);
curveVertex(731, 557);
curveVertex(727, 544);
curveVertex(716, 538);
curveVertex(722, 511);
curveVertex(729, 490);
curveVertex(742, 470);
curveVertex(763, 459);
curveVertex(784, 455);
endShape(CLOSE);

//højre forpote detalje
strokeWeight(2)
noFill(234,225,225)
beginShape();
vertex(808, 586);
vertex(823, 555);
endShape();

//højre forpote detalje
strokeWeight(2)
noFill(234,225,225)
beginShape();
vertex(750, 574);
vertex(749, 552);
vertex(760, 530);
endShape();

//højre forpote detalje
strokeWeight(2)
noFill(234,225,225)
beginShape();
vertex(718, 524);
vertex(753, 484);
endShape();

//bryst
strokeWeight(2)
fill(234,225,225)
beginShape();
curveVertex(784, 454);
curveVertex(773, 443);
curveVertex(759, 438);
curveVertex(756, 447);
curveVertex(742, 455);
curveVertex(716, 467);
curveVertex(702, 474);
curveVertex(685, 475);
curveVertex(661, 470);
curveVertex(609, 451);
curveVertex(577, 434);
curveVertex(561, 450);
curveVertex(551, 460);
curveVertex(563, 458);
curveVertex(584, 460);
curveVertex(612, 464);
curveVertex(632, 468);
curveVertex(648, 474);
curveVertex(659, 484);
curveVertex(676, 518);
curveVertex(682, 530);
curveVertex(703, 539);
curveVertex(717, 538);
curveVertex(722, 507);
curveVertex(730, 490);
curveVertex(736, 475);
curveVertex(757, 462);
curveVertex(758, 461);
endShape(CLOSE);

//Jord
stroke(20, 66, 11);
strokeWeight(2)
fill(20, 66, 11);
beginShape();
curveVertex(434, 720);
curveVertex(446, 707);
curveVertex(446, 698);
curveVertex(445, 690);
curveVertex(440, 677);
curveVertex(453, 671);
curveVertex(469, 670);
curveVertex(476, 667);
curveVertex(481, 653);
curveVertex(492, 641);
curveVertex(498, 625);
curveVertex(519, 611);
curveVertex(550, 585);
curveVertex(569, 582);
curveVertex(573, 587);
curveVertex(589, 604);
curveVertex(590, 606);
curveVertex(593, 638);
curveVertex(601, 647);
curveVertex(615, 648);
curveVertex(646, 642);
curveVertex(660, 632);
curveVertex(676, 637);
curveVertex(688, 637);
curveVertex(715, 615);
curveVertex(718, 613);
curveVertex(716, 595);
curveVertex(732, 584);
curveVertex(734, 573);
curveVertex(751, 576);
curveVertex(756, 586);
curveVertex(766, 595);
curveVertex(779, 600);
curveVertex(797, 600);
curveVertex(807, 591);
curveVertex(826, 600);
curveVertex(842, 592);
curveVertex(861, 582);
curveVertex(867, 567);
curveVertex(908, 572);
curveVertex(974, 615);
curveVertex(1094, 720);
curveVertex(1124, 721);
endShape(CLOSE);
}

function mousePressed() {
console.log(mouseX, mouseY);
}

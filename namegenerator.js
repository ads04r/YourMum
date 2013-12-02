/* Mother's Maiden Name Generator
 *
 * Written by Ash, ads04r@ecs.soton.ac.uk
 *
 * This file is open source, and
 * may be used, re-used or modified for any purpose, 
 * and I don't really mind if you credit me or not. It
 * relies on Paul Johnston's SHA1 function which is
 * distributed under the BSD License. See
 * http://pajhome.org.uk/crypt/md5 for details.
 *
 */

function GenerateSurname(fn, cn) {

    /* Create array of 256 surnames...
     */

    var surnames = new Array(
      "MARTIN", "ALLEN", "MITCHELL", "BENNETT", "HARVEY",
      "HOWARD", "PAYNE", "LAWRENCE", "FRANCIS", "OLIVER",
      "GREGORY", "OSBORNE", "MAY", "GILBERT", "ALLAN", "JORDAN",
      "GEORGE", "ARNOLD", "MILES", "ALEXANDER", "AUSTIN",
      "GOODWIN", "LAMBERT", "JARVIS", "BALDWIN", "DAVEY",
      "BRYANT", "DODD", "GILES", "JOHN", "HERBERT", "RANDALL",
      "VINCENT", "DENNIS", "ALLISON", "GODFREY", "BRYAN",
      "BRAY", "HYDE", "NEAL", "LEONARD", "ROWLAND", "BARRY",
      "CHARLES", "MASSEY", "TERRY", "GUY", "DREW", "NEALE",
      "BARNARD", "HUMPHREY", "HUBBARD", "ANDREW", "NICHOLAS",
      "JEFFERY", "HODGE", "TATE", "NICOL", "PATRICK", "DANIEL",
      "JOSEPH", "HENDRY", "AMOS", "DOWNING", "CLARE", "MALCOLM",
      "RALPH", "BATE", "HIBBERT", "ANTHONY", "GIBB", "VALENTINE",
      "HANNAH", "GRACE", "BRAND", "ROLFE", "IRWIN", "BATTY",
      "GERRARD", "OSBORN", "SAMUEL", "FERRIS", "CUTHBERT",
      "IVES", "GODWIN", "DAVID", "RICH", "RODGER", "BIBBY",
      "JUDD", "SIM", "TRACEY", "WALTER", "REDMOND", "ISAAC",
      "PEGG", "ABRAHAM", "MICHAEL", "AMBROSE", "PAINE", "SMITH",
      "TAYLOR", "WALKER", "WRIGHT", "TURNER", "COOPER", "WARD",
      "BAKER", "BELL", "PARKER", "MILLER", "COOK", "CARTER",
      "BAILEY", "FOSTER", "CHAPMAN", "MASON", "WEBB", "HUNT",
      "PALMER", "FISHER", "BARKER", "BUTLER", "FLETCHER",
      "HUNTER", "DAY", "SPENCER", "WEBSTER", "NEWMAN", "PORTER",
      "GARDNER", "SHEPHERD", "COOKE", "HARPER", "POTTER",
      "COLEMAN", "WHEELER", "BAXTER", "SLATER", "HAMMOND",
      "BARBER", "WOODWARD", "FOWLER", "TUCKER", "HAYWARD",
      "SKINNER", "GLOVER", "FULLER", "CARTWRIGHT", "ARCHER",
      "WARNER", "GODDARD", "BUTCHER", "DYER", "SHEPPARD",
      "HOOPER", "GARDINER", "WINTER", "NAYLOR", "LEACH",
      "GARNER", "CARPENTER", "FARMER", "CHANDLER", "COLLIER",
      "FAULKNER", "POTTS", "TYLER", "FORSTER", "GALE", "POWER",
      "WALLER", "GOODMAN", "SADLER", "BATEMAN", "HOOD", "BOWMAN",
      "RAYNER", "MERCER", "DRAPER", "LISTER", "BREWER", "COPE",
      "WAITE", "GOODALL", "MILNER", "WAINWRIGHT", "HICKMAN",
      "GRAINGER", "SMYTH", "SALTER", "MATHER", "BAYLISS",
      "BAIRD", "TANNER", "RYDER", "SAWYER", "ROPER", "CROWTHER",
      "BANNISTER", "JOHNSON", "ROBINSON", "THOMPSON", "HARRIS",
      "JACKSON", "WATSON", "HARRISON", "ANDERSON", "DAVIS",
      "RICHARDSON", "COLLINS", "ADAMS", "WILKINSON", "ROGERS",
      "MATTHEWS", "JENKINS", "STEVENS", "PEARSON", "DIXON",
      "ANDREWS", "REYNOLDS", "HENDERSON", "SAUNDERS",
      "PEARCE", "DAWSON", "ATKINSON", "WILLIAMSON", "WATTS",
      "HUDSON", "STEVENSON", "MORRISON", "HAWKINS", "NICHOLSON",
      "ROBSON", "HODGSON", "NICHOLLS", "HOPKINS", "HIGGINS",
      "WATKINS", "NELSON", "HUTCHINSON", "LAWSON", "WALTERS",
      "STEPHENSON", "STEPHENS", "JENNINGS", "GIBBS", "LUCAS",
      "SIMMONS", "DICKINSON", "PETERS", "PARKINSON",
      "TOMLINSON", "PERKINS", "SANDERS", "DAVISON"
    );

    /* Take SHA1 hash of the strings entered, and use the
     * first two characters of the hex string as an array
     * index.
     */

    var fullstr = fn + cn;
    var hash = hex_sha1(fullstr.toUpperCase());
    var idx = parseInt(hash.substr(0,2), 16);

    return surnames[idx];

}

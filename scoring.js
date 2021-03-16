// Après avoir chargé le DOM, exécutez le traitement dans function ().
$(document).ready(function(){
  // Créez une logique pour obtenir les valeurs d'entrée de [score en japonais, score en anglais, score en mathématiques, score en sciences, score en sciences sociales] et donnez le score total et le score moyen.
  function score_indicate(){
    // Vers la variable "subject_points".
    // Attribuez un tableau de [notes en japonais, notes en anglais, notes en mathématiques, notes en sciences, notes en sciences sociales].
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
// A la variable "sum".
// Ajoutez respectivement [notes en japonais, notes en anglais, notes en mathématiques, notes en sciences, notes en sciences sociales].
// Indice ! Sortez les tableaux un par un et ajoutez-les.
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
  // Faites en sorte que "Points totaux :" (id="sum_indicate") produise la variable "sum" (total des points).
    $("#sum_indicate").text(sum) ;
  // A la variable "moyenne".
  // sortir la valeur moyenne et l'affecter. (le score total du nombre que vous voulez moyenner (somme) / le nombre total de pièces)
  // Indice ! Le nombre total de pièces est obtenu en utilisant la méthode de la longueur. (méthode length : méthode permettant d'obtenir la longueur d'une chaîne de caractères, le nombre d'éléments d'un tableau, etc.)
  } ;
  // Obtenez le score moyen, et créez une logique pour faire une séparation de rang ("A", "B", "C", "D") à partir du score moyen obtenu.
  function get_achievement(){
    // A la variable "averageIndicate".
    // Nous récupérons le score moyen à partir de id="average_indicate" sur le HTML et l'affectons à celui-ci.
    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)
    // Si "averageIndicate" est égal ou supérieur à 80, retournez "A".
    if (averageIndicate >= 80){
      return "A";
      // Si "averageIndicate" est égal ou supérieur à 60, retournez "B".
    } else if (averageIndicate >= 60) {
      return "B";
      // Si "averageIndicate" est égal ou supérieur à 40, retournez "C".
    } else if (averageIndicate >= 40) {
      return "C";
      // Si "averageIndicate" est autre chose que cela, retournez "D".
    } else {
      return "D";
    }
  };
  // 各教科の点数を取得し、取得した点数からPasser/不Passerの判断を下すロジックを作ります。
  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // 変数「number」に入力した教科の数を代入します。
    let number = subject_points.length;
    // 変数「judge」に"Passer"を代入しておきます。
    let judge = "Passer";
    // 入力したそれぞれの教科の点数が60点よりも低いと変数「judge」に"不Passer"を再代入して「judge」を返します。
    // ヒント! 「javascript 点数 Passer 不Passer ロジック」で検索してみてください。
    return pass_or_failure;
  };
  // 最終的なジャッジのロジックを作ります。
  function judgement(){
    // 変数「achievement」に「get_achievement()の戻り値」を代入します。
    let achievement = get_achievement();
    // 変数「pass_or_failure」に「get_pass_or_failure()の戻り値」を代入します。
    let pass_or_failure = get_pass_or_failure();
    // 「Juge final」(id="alert-indicate)ボタンを押したら「Ton niveau${achievement}で${pass_or_failure}です」が出力される処理です。
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Ton niveau${achievement}で${pass_or_failure}です</label>`);
  };
  // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]のいずれかの点数が変更された際に「function score_indicate()」を発火させる処理です。
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  // 「Rang」(id="evaluation")ボタンを押したら「get_achievement()」が出力される処理です。
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });
  // 「Jugement」(id="btn-judge")ボタンを押したら「function et_pass_or_failure()」が出力される処理です。
    $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });
  // 「Juge final」(id="btn-declaration")ボタンを押したら「function judgement()」が出力される処理です。
  $('#btn-declaration').click(function() {
  $("#declaration").text(judgement());
  });
});
// ここに書かれているjsの記述はあくまでヒントとして用意された雛形なので、書かれている記述に従わずに実装したいという場合は、自分の好きに実装して構わない。課題要件を満たし、コードの品質が一定の水準にあるとJugementされればどのような実装でもPasserになる。
// 例ではJavaScriptとjQueryの両方の記述を使用しているが、どちらかに統一しても構いません。

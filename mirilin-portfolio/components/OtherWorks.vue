<template lang="pug">
  ul.other-works
    li.other-works_item
      h2.other-works_title 三菱電機インフォメーションシステムズ株式会社 図書館検索システム 館内OPAC操作画面
      p.other-works_description 全国的に使用されている図書館検索端末の操作画面のディレクション、ワイヤーフレーム制作、リニューアルデザイン、アイコン制作、コーディング、CSS・JavaScript実装を担当いたしました。※画像は開発中のものになります。
        br
        | マウスまたはタッチパネルでの操作になるとのことだったので、どちらでも使いやすいUIになるよう心掛けました。操作の種類によってボタンの形を変えるなどで、見た目から直感的に操作方法がわかるように工夫しています。
        br
        | 図書館によってはテーマカラーを変更することがあるので、トップのイラスト以外はすべてcss、アイコンはsvgで実装することにより、色の変更を容易にできるようにしています。
        br
        | また、ワイヤーフレームはAdobe XDを使用してモックアップを作成し、お客様と共有することで操作感の確認をしながら進めていきました。
      .other-works_images
        img(src="/img/worksImg_other_09.jpg", alt="").other-works_image
        img(src="/img/worksImg_other_10.jpg", alt="").other-works_image
        img(src="/img/worksImg_other_11.jpg", alt="").other-works_image
        img(src="/img/worksImg_other_12.jpg", alt="").other-works_image
        img(src="/img/worksImg_other_13.jpg", alt="").other-works_image
        img(src="/img/worksImg_other_14.jpg", alt="").other-works_image
    li.other-works_item
      h2.other-works_title 三菱電機インフォメーションシステムズ株式会社
        br
        | 図書館検索システム こどもページ
      p.other-works_description 上記図書館検索システムのWEB版子供用ページのテンプレートデザイン、イラスト制作を担当いたしました。
        br
        | 動物のイラストは購入したものですが、それ以外の背景などの制作はillustratorで行っています。
      .other-works_images.-center
        img(src="/img/worksImg_other_15.png", alt="").other-works_image
    li.other-works_item
      h2.other-works_title アイコン
      p.other-works_description スキュアモーフィックデザインの既存のアイコンと同じテイストで、新たにこれら5点を作成しました。illustratorで制作したベクターデータです。
      .other-works_images.-center
        img(src="/img/worksImg_other_01.png", alt="").other-works_image
    li.other-works_item
      h2.other-works_title 年賀状デザイン
      p.other-works_description 以前の勤めていた会社の年賀状制作を担当いたしました。イラストは水墨で書いたものを取り込み、デジタルでさらに手を加えています。金色の木の部分も水墨で書いたものをベクターデータに変換したものです。
      .other-works_images.-center
        img(src="/img/worksImg_other_02.jpg", alt="").other-works_image
    li.other-works_item
      h2.other-works_title 絵画制作
      p.other-works_description 学生時代からの絵画作品です。現在も制作活動は続けています。
        br
        | 使用画材は主に雲肌麻紙、岩絵具、墨などの日本画画材です。細部まで細かく書くことを得意としています。
      .other-works_images
        img(src="/img/worksImg_other_03.jpg", alt="").other-works_image
        img(src="/img/worksImg_other_04.jpg", alt="").other-works_image
        img(src="/img/worksImg_other_05.jpg", alt="").other-works_image
        img(src="/img/worksImg_other_06.jpg", alt="").other-works_image
        img(src="/img/worksImg_other_07.jpg", alt="").other-works_image.-full
        img(src="/img/worksImg_other_08.jpg", alt="").other-works_image
</template>

<style lang="scss" scoped>
.other-works {
  &_item {
    padding: 40px;
    margin-bottom: 60px;
    box-shadow: 0px 5px 40px 0.05px rgba(84, 84, 84, 0.2);
  }

  &_title {
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 1.5;
  }

  &_images {
    display: flex;
    flex-wrap: wrap;
  }

  &_images.-center {
    justify-content: center;
  }

  &_image {
    flex: 0 1 calc(50% - 10px);
    width: calc(50% - 10px);
    height: 100%;
    margin-bottom: 20px;

    &:nth-child(2n) {
      margin-left: 20px;
    }
  }

  &_image.-full {
    flex: 1 1 100%;
    width: 100%;
    margin-left: 0;
  }

  &_image.-full + &_image:nth-child(2n) {
    margin-left: 0;
  }

  &_description {
    margin-bottom: 40px;
  }

  @media (--sp) {
    &_item {
      padding: 20px;
    }
  }
}
</style>

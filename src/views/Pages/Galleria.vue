<template>
  <div class="container">
    <div class="block">
      <h1>Galleria</h1>
      <div class="tz-gallery">
        <div class="row text-center text-lg-left">
          <div v-for="img in images" class="col-lg-6 col-md-6 col-8">
            <div class="d-block mb-4 h-100">
              <b-img class="galleryImg img-fluid img-thumbnail" id="myImg1" :src="img.src" :alt="img.alt"> </b-img>
              <figcaption>{{img.description}}</figcaption>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      images: [
        {
          src: '../../assets/susine.jpg',
          alt: 'Susine selvatiche.',
          description: 'Susine selvatiche.'
        },
        {
          src: '../../assets/le_pianazze.png',
          alt: 'Le pianazze. Da dove tutto inizia!!',
          description: 'Le pianazze. Da dove tutto inizia!!'
        },
        {
          src: '../../assets/emanuele-giordano.jpg',
          alt: 'Migliore operaio di sempre!',
          description: 'Migliore operaio di sempre!'
        },
        {
          src: '../../assets/api.jpg',
          alt: 'Alleati naturali.',
          description: 'Alleati naturali.'
        },
        {
          src: '../../assets/lavanda.jpg',
          alt: 'Raccolta della lavanda.',
          description: 'Raccolta della lavanda.'
        },
        {
          src: '../../assets/home1.jpg',
          alt: 'Controllo qualità!!',
          description: 'Controllo qualità!!'
        },
        {
          src: '../../assets/lavorazione-terra1.jpg',
          alt: 'La lavorazione della terra.',
          description: 'La lavorazione della terra.'
        },
        {
          src: '../../assets/lavorazione-terra2.jpg',
          alt: 'I primi germogli.',
          description: 'I primi germogli.'
        },
        {
          src: '../../assets/lavorazione-terra3.jpg',
          alt: 'Cipolla da seme.',
          description: 'Cipolla da seme.'
        },
        {
          src: '../../assets/more.jpg',
          alt: 'Le more selvatiche.',
          description: 'Le more selvatiche.'
        },
        {
          src: '../../assets/prodotti1.jpg',
          alt: 'Rosmarino in crescita.',
          description: 'Rosmarino in crescita.'
        },
        {
          src: '../../assets/raccolto.jpg',
          alt: 'Rosmarino e tarassaco appena raccolti.',
          description: 'Rosmarino e tarassaco appena raccolti.'
        },
        {
          src: '../../assets/trattore.jpg',
          alt: 'Anche il trattore ogni tanto si riposa.',
          description: 'Anche il trattore ogni tanto si riposa.'
        },
        {
          src: '../../assets/lavanda_back_orig.jpg',
          alt: 'La lavanda migliore di sempre!!',
          description: 'La lavanda migliore di sempre!!'
        }
      ]
      
    };
  },
}
</script>

<style lang="sass">
@import './Galleria'
</style>
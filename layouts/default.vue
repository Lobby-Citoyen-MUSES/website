<template>
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/" title="Lobby citoyen MUSES">MUSES</nuxt-link>
          </li>

          <li>
            Qui sommes-nous?
            <ul>
              <li>
                <nuxt-link to="/le-mot-du-president" title="Le mot du Président">Le mot du Président</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/methode-et-valeurs" title="Méthode et valeurs">Notre approche</nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/conseil-administration"
                  title="Conseil d'administration"
                >Conseil d'administration</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/comite-scientifique" title="Comité scientifique">Comité scientifique</nuxt-link>
              </li>
            </ul>
          </li>

          <li>
            <nuxt-link to="/" title="Plaidoyers">Nos plaidoyers</nuxt-link>
          </li>

          <li>
            Nous soutenir
            <ul>
              <li>
                <nuxt-link to="/" title="Vous êtes un citoyens">Citoyen</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="Vous êtes une entreprises">Enterprise</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>

    <nuxt />

    <footer>
      <nav>
        <ul>
          <li>
            <a target="_blank" href="https://twitter.com/MusesCitoyen">Twitter</a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/MusesCitoyen/">Facebook</a>
          </li>
          <li>
            <a href="/mentions-legales">Statuts &amp; Mentions légales</a>
          </li>
          <li>
            <address><a target="_blank" href="mailto:contact@muses-lobby-citoyen.org">Contact</a></address>
          </li>
        </ul>
      </nav>
      <small>&#169; 2019, MUSES</small>
    </footer>
  </div>
</template>

<script>
</script>

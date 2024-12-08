/**
 * Copyright 2024 syd18b
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/rpg-character/rpg-character.js";
import { WiredButton, WiredInput } from "wired-elements";
import { query } from "lit/decorators.js";

/**
 * `rpg-me`
 * 
 * @demo index.html
 * @element rpg-me

 */
export class Ist256Project2 extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "rpg-me";
  }

  constructor() {
    super();
    this.accessories = "0"; //0-9. 0 is nothing
    this.base = "0"; //0 or 1 (For the seed: Male 0-4, Female 5-9)
    this.leg = "0"; //set to 0 and hide input
    this.face = "0"; //0-5. 0 is nothing
    this.faceItem = "0"; //0-9. 0 is nothing
    this.hair = "0"; //0-9
    this.pants = "0"; //0-9
    this.shirt = "0"; //0-9
    this.skin = "0"; //0-9
    this.hatColor = "0"; //0-9
    this.hat = "none"; //15 hats including "none"
    this.fire = false; // true or false
    this.walking = false; // true or false
    this.circle = false; // true or false

    this.seedText = ""; // The seed used if 10 digits Ex: "1505537481"
    // this.seed = "";         // The seed used if a user types in a literalseed Ex: "1505537481"

    this.characterWidth = "450"; //Width of the character (adjusts to viewport)
    this.characterHeight = "450"; //Height of the charcter (adjusts to viewport)
    this.viewportWidth = window.innerWidth; // Initialize with current width
    window.addEventListener("resize", () => this.handleResize());
  }

  // Lit reactive properties
  static get properties() {
    return {
      accessories: { type: String, reflect: true }, //syncs property and attribute
      base: { type: String, reflect: true },
      leg: { type: String, reflect: true },
      face: { type: String, reflect: true },
      faceItem: { type: String, reflect: true },
      hair: { type: String, reflect: true },
      pants: { type: String, reflect: true },
      shirt: { type: String, reflect: true },
      skin: { type: String, reflect: true },
      hatColor: { type: String, reflect: true },
      hat: { type: String, reflect: true },
      fire: { type: Boolean, reflect: true },
      walking: { type: Boolean, reflect: true },
      circle: { type: Boolean, reflect: true },

      seedText: { type: String, reflect: true },
      // seed: { type: String, reflect: true },
      literalseed: { type: Boolean, reflect: true },

      characterWidth: { type: String, reflect: true },
      characterHeight: { type: String, reflect: true },
      viewportWidth: { type: Number },
    };
  }

  static get styles() {
    return [
      css`
        .entire-wrapper {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        td {
          height: 40px;
          padding: var(--ddd-spacing-1); //4px
          font-size: var(--ddd-font-size-xxs); //20px
        }
        .td-title {
          font-weight: var(--ddd-font-weight-bold, 700); //bold font
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="entire-wrapper">
        <div class="character-seed-wrapper">
          <!-- 
        Seed is 10 digits. 
        The third digit (leg) is always 0.
        Hat is not part of the seed 
        exampleseed: 1501111111 
        each number in the seed represents an option in alphabetical order
        -->
          <rpg-character
            id="character"
            literalseed
            width="${this.characterWidth}"
            height="${this.characterHeight}"
            accessories="${this.accessories}"
            base="${this.base}"
            face="${this.face}"
            faceitem="${this.faceItem}"
            hair="${this.hair}"
            pants="${this.pants}"
            shirt="${this.shirt}"
            skin="${this.skin}"
            hatcolor="${this.hatColor}"
            hat="${this.hat}"
            ?fire=${this.fire}
            ?walking=${this.walking}
            ?circle=${this.circle}
          >
            <!-- toggles attributes depending if true or false -->
          </rpg-character>
          <h3>Seed: ${this.seedText}</h3>
        </div>
        <table>
          <form>
            <tr>
              <td class="td-title">Accessories:</td>
              <td>
                <wired-combo
                  id="accessoryDrop"
                  selected=""
                  role="combobox"
                  aria-haspopup="listbox"
                  tabindex="0"
                  class="wired-rendered"
                  aria-expanded="false"
                >
                  <wired-item value="0" role="option" class="wired-rendered"
                    >0</wired-item
                  >
                  <wired-item value="1" role="option" class="wired-rendered"
                    >1</wired-item
                  >
                  <wired-item value="2" role="option" class="wired-rendered"
                    >2</wired-item
                  >
                  <wired-item value="3" role="option" class="wired-rendered"
                    >3</wired-item
                  >
                  <wired-item value="4" role="option" class="wired-rendered"
                    >4</wired-item
                  >
                  <wired-item value="5" role="option" class="wired-rendered"
                    >5</wired-item
                  >
                  <wired-item value="6" role="option" class="wired-rendered"
                    >6</wired-item
                  >
                  <wired-item value="7" role="option" class="wired-rendered"
                    >7</wired-item
                  >
                  <wired-item value="8" role="option" class="wired-rendered"
                    >8</wired-item
                  >
                  <wired-item value="9" role="option" class="wired-rendered"
                    >9</wired-item
                  >
                </wired-combo>
              </td>
            </tr>
            <tr>
              <!-- Bases 0-4 are male. Bases 5-9 are female -->
              <td class="td-title">Base:</td>
              <td>
                <wired-combo
                  id="baseDrop"
                  selected=""
                  role="combobox"
                  aria-haspopup="listbox"
                  tabindex="0"
                  class="wired-rendered"
                  aria-expanded="false"
                >
                  <wired-item value="0" role="option" class="wired-rendered"
                    >Male</wired-item
                  >
                  <wired-item value="1" role="option" class="wired-rendered"
                    >Female</wired-item
                  >
                </wired-combo>
              </td>
            </tr>
            <tr>
              <td class="td-title">Face:</td>
              <td>
                <wired-combo
                  id="faceDrop"
                  selected=""
                  role="combobox"
                  aria-haspopup="listbox"
                  tabindex="0"
                  class="wired-rendered"
                  aria-expanded="false"
                >
                  <wired-item value="0" role="option" class="wired-rendered"
                    >0</wired-item
                  >
                  <wired-item value="1" role="option" class="wired-rendered"
                    >1</wired-item
                  >
                  <wired-item value="2" role="option" class="wired-rendered"
                    >2</wired-item
                  >
                  <wired-item value="3" role="option" class="wired-rendered"
                    >3</wired-item
                  >
                  <wired-item value="4" role="option" class="wired-rendered"
                    >4</wired-item
                  >
                  <wired-item value="5" role="option" class="wired-rendered"
                    >5</wired-item
                  >
                </wired-combo>
              </td>
            </tr>
            <tr>
              <td class="td-title">Face Item:</td>
              <td>
                <wired-combo
                  id="faceItemDrop"
                  selected=""
                  role="combobox"
                  aria-haspopup="listbox"
                  tabindex="0"
                  class="wired-rendered"
                  aria-expanded="false"
                >
                  <wired-item value="0" role="option" class="wired-rendered"
                    >0</wired-item
                  >
                  <wired-item value="1" role="option" class="wired-rendered"
                    >1</wired-item
                  >
                  <wired-item value="2" role="option" class="wired-rendered"
                    >2</wired-item
                  >
                  <wired-item value="3" role="option" class="wired-rendered"
                    >3</wired-item
                  >
                  <wired-item value="4" role="option" class="wired-rendered"
                    >4</wired-item
                  >
                  <wired-item value="5" role="option" class="wired-rendered"
                    >5</wired-item
                  >
                  <wired-item value="6" role="option" class="wired-rendered"
                    >6</wired-item
                  >
                  <wired-item value="7" role="option" class="wired-rendered"
                    >7</wired-item
                  >
                  <wired-item value="8" role="option" class="wired-rendered"
                    >8</wired-item
                  >
                  <wired-item value="9" role="option" class="wired-rendered"
                    >9</wired-item
                  >
                </wired-combo>
              </td>
            </tr>
            <tr>
              <td class="td-title">Hair:</td>
              <td>
                <wired-combo
                  id="hairDrop"
                  selected=""
                  role="combobox"
                  aria-haspopup="listbox"
                  tabindex="0"
                  class="wired-rendered"
                  aria-expanded="false"
                >
                  <wired-item value="0" role="option" class="wired-rendered"
                    >0</wired-item
                  >
                  <wired-item value="1" role="option" class="wired-rendered"
                    >1</wired-item
                  >
                  <wired-item value="2" role="option" class="wired-rendered"
                    >2</wired-item
                  >
                  <wired-item value="3" role="option" class="wired-rendered"
                    >3</wired-item
                  >
                  <wired-item value="4" role="option" class="wired-rendered"
                    >4</wired-item
                  >
                  <wired-item value="5" role="option" class="wired-rendered"
                    >5</wired-item
                  >
                  <wired-item value="6" role="option" class="wired-rendered"
                    >6</wired-item
                  >
                  <wired-item value="7" role="option" class="wired-rendered"
                    >7</wired-item
                  >
                  <wired-item value="8" role="option" class="wired-rendered"
                    >8</wired-item
                  >
                  <wired-item value="9" role="option" class="wired-rendered"
                    >9</wired-item
                  >
                </wired-combo>
              </td>
            </tr>
            <tr>
              <td class="td-title">Pants:</td>
              <td>
                <wired-combo
                  id="pantsDrop"
                  selected=""
                  role="combobox"
                  aria-haspopup="listbox"
                  tabindex="0"
                  class="wired-rendered"
                  aria-expanded="false"
                >
                  <wired-item value="0" role="option" class="wired-rendered"
                    >0</wired-item
                  >
                  <wired-item value="1" role="option" class="wired-rendered"
                    >1</wired-item
                  >
                  <wired-item value="2" role="option" class="wired-rendered"
                    >2</wired-item
                  >
                  <wired-item value="3" role="option" class="wired-rendered"
                    >3</wired-item
                  >
                  <wired-item value="4" role="option" class="wired-rendered"
                    >4</wired-item
                  >
                  <wired-item value="5" role="option" class="wired-rendered"
                    >5</wired-item
                  >
                  <wired-item value="6" role="option" class="wired-rendered"
                    >6</wired-item
                  >
                  <wired-item value="7" role="option" class="wired-rendered"
                    >7</wired-item
                  >
                  <wired-item value="8" role="option" class="wired-rendered"
                    >8</wired-item
                  >
                  <wired-item value="9" role="option" class="wired-rendered"
                    >9</wired-item
                  >
                </wired-combo>
              </td>
            </tr>
            <tr>
              <td class="td-title">Shirt:</td>
              <td>
                <wired-combo
                  id="shirtDrop"
                  selected=""
                  role="combobox"
                  aria-haspopup="listbox"
                  tabindex="0"
                  class="wired-rendered"
                  aria-expanded="false"
                >
                  <wired-item value="0" role="option" class="wired-rendered"
                    >0</wired-item
                  >
                  <wired-item value="1" role="option" class="wired-rendered"
                    >1</wired-item
                  >
                  <wired-item value="2" role="option" class="wired-rendered"
                    >2</wired-item
                  >
                  <wired-item value="3" role="option" class="wired-rendered"
                    >3</wired-item
                  >
                  <wired-item value="4" role="option" class="wired-rendered"
                    >4</wired-item
                  >
                  <wired-item value="5" role="option" class="wired-rendered"
                    >5</wired-item
                  >
                  <wired-item value="6" role="option" class="wired-rendered"
                    >6</wired-item
                  >
                  <wired-item value="7" role="option" class="wired-rendered"
                    >7</wired-item
                  >
                  <wired-item value="8" role="option" class="wired-rendered"
                    >8</wired-item
                  >
                  <wired-item value="9" role="option" class="wired-rendered"
                    >9</wired-item
                  >
                </wired-combo>
              </td>
            </tr>
            <tr>
              <td class="td-title">Skin:</td>
              <td>
                <wired-combo
                  id="skinDrop"
                  selected=""
                  role="combobox"
                  aria-haspopup="listbox"
                  tabindex="0"
                  class="wired-rendered"
                  aria-expanded="false"
                >
                  <wired-item value="0" role="option" class="wired-rendered"
                    >0</wired-item
                  >
                  <wired-item value="1" role="option" class="wired-rendered"
                    >1</wired-item
                  >
                  <wired-item value="2" role="option" class="wired-rendered"
                    >2</wired-item
                  >
                  <wired-item value="3" role="option" class="wired-rendered"
                    >3</wired-item
                  >
                  <wired-item value="4" role="option" class="wired-rendered"
                    >4</wired-item
                  >
                  <wired-item value="5" role="option" class="wired-rendered"
                    >5</wired-item
                  >
                  <wired-item value="6" role="option" class="wired-rendered"
                    >6</wired-item
                  >
                  <wired-item value="7" role="option" class="wired-rendered"
                    >7</wired-item
                  >
                  <wired-item value="8" role="option" class="wired-rendered"
                    >8</wired-item
                  >
                  <wired-item value="9" role="option" class="wired-rendered"
                    >9</wired-item
                  >
                </wired-combo>
              </td>
            </tr>
            <tr>
              <td class="td-title">Hat Color:</td>
              <td>
                <wired-combo
                  id="hatColorDrop"
                  selected=""
                  role="combobox"
                  aria-haspopup="listbox"
                  tabindex="0"
                  class="wired-rendered"
                  aria-expanded="false"
                >
                  <wired-item value="0" role="option" class="wired-rendered"
                    >0</wired-item
                  >
                  <wired-item value="1" role="option" class="wired-rendered"
                    >1</wired-item
                  >
                  <wired-item value="2" role="option" class="wired-rendered"
                    >2</wired-item
                  >
                  <wired-item value="3" role="option" class="wired-rendered"
                    >3</wired-item
                  >
                  <wired-item value="4" role="option" class="wired-rendered"
                    >4</wired-item
                  >
                  <wired-item value="5" role="option" class="wired-rendered"
                    >5</wired-item
                  >
                  <wired-item value="6" role="option" class="wired-rendered"
                    >6</wired-item
                  >
                  <wired-item value="7" role="option" class="wired-rendered"
                    >7</wired-item
                  >
                  <wired-item value="8" role="option" class="wired-rendered"
                    >8</wired-item
                  >
                  <wired-item value="9" role="option" class="wired-rendered"
                    >9</wired-item
                  >
                </wired-combo>
              </td>
            </tr>
            <tr>
              <td class="td-title">Hat:</td>
              <td>
                <wired-combo
                  id="hatDrop"
                  selected=""
                  role="combobox"
                  aria-haspopup="listbox"
                  tabindex="0"
                  class="wired-rendered"
                  aria-expanded="false"
                >
                  <wired-item value="none" role="option" class="wired-rendered"
                    >none</wired-item
                  >
                  <wired-item value="bunny" role="option" class="wired-rendered"
                    >bunny</wired-item
                  >
                  <wired-item
                    value="coffee"
                    role="option"
                    class="wired-rendered"
                    >coffee</wired-item
                  >
                  <wired-item
                    value="construction"
                    role="option"
                    class="wired-rendered"
                    >construction</wired-item
                  >
                  <wired-item
                    value="cowboy"
                    role="option"
                    class="wired-rendered"
                    >cowboy</wired-item
                  >
                  <wired-item
                    value="education"
                    role="option"
                    class="wired-rendered"
                    >education</wired-item
                  >
                  <wired-item
                    value="knight"
                    role="option"
                    class="wired-rendered"
                    >knight</wired-item
                  >
                  <wired-item value="ninja" role="option" class="wired-rendered"
                    >ninja</wired-item
                  >
                  <wired-item value="party" role="option" class="wired-rendered"
                    >party</wired-item
                  >
                  <wired-item
                    value="pirate"
                    role="option"
                    class="wired-rendered"
                    >pirate</wired-item
                  >
                  <wired-item
                    value="watermelon"
                    role="option"
                    class="wired-rendered"
                    >watermelon</wired-item
                  >
                </wired-combo>
              </td>
            </tr>
            <tr>
              <td class="td-title">On fire:</td>
              <td>
                <wired-checkbox
                  id="fireBox"
                  class="wired-rendered"
                  @change=${this.toggleFire}
                ></wired-checkbox>
              </td>
            </tr>
            <tr>
              <td class="td-title">Walking:</td>
              <td>
                <wired-checkbox
                  id="walkingBox"
                  class="wired-rendered"
                  @change=${this.toggleWalking}
                ></wired-checkbox>
              </td>
            </tr>
            <tr>
              <td class="td-title">Circle:</td>
              <td>
                <wired-checkbox
                  id="circleBox"
                  class="wired-rendered"
                  @change=${this.toggleCircle}
                ></wired-checkbox>
              </td>
            </tr>
            <tr>
              <td>
                <wired-button @click=${this.randomizeButton}
                  >Randomize</wired-button
                >
              </td>
            </tr>
            <tr>
              <td>
                <wired-button @click=${this.copyButton}
                  >Share Link</wired-button
                >
              </td>
            </tr>
          </form>
        </table>
      </div>
    `;
  }

  firstUpdated() {
    //Sets up seed and MutationObservers
    const character = this.shadowRoot.getElementById("character");
    const accessoryDrop = this.shadowRoot.getElementById("accessoryDrop");
    const baseDrop = this.shadowRoot.getElementById("baseDrop");
    const faceDrop = this.shadowRoot.getElementById("faceDrop");
    const faceItemDrop = this.shadowRoot.getElementById("faceItemDrop");
    const hairDrop = this.shadowRoot.getElementById("hairDrop");
    const pantsDrop = this.shadowRoot.getElementById("pantsDrop");
    const shirtDrop = this.shadowRoot.getElementById("shirtDrop");
    const skinDrop = this.shadowRoot.getElementById("skinDrop");
    const hatColorDrop = this.shadowRoot.getElementById("hatColorDrop");
    const hatDrop = this.shadowRoot.getElementById("hatDrop");

    // Checks if there is query string for the seed in the URL
    const queryString = window.location.search;
    if (queryString) {
      // queryString found
      // Get full URL
      const currURL = window.location.href;
      // Create URL object
      const url = new URL(currURL);
      // Create URLSearchParams to go through query string
      const queryParams = new URLSearchParams(url.search);
      const retrievedSeedText = queryParams.get("seed");
      const retrievedHat = queryParams.get("hat");
      const retrievedFire = queryParams.get("fire");
      const retrievedWalking = queryParams.get("walking");
      const retrievedCircle = queryParams.get("circle");

      console.log("Retrieved Seed: " + retrievedSeedText);
      console.log("Retrieved Hat: " + retrievedHat);
      console.log("Retrieved Fire: " + retrievedFire);
      console.log("Retrieved Walking: " + retrievedWalking);
      console.log("Retrieved Circle: " + retrievedCircle);

      // Create a list to interpret each index
      const seedList = retrievedSeedText.split("");

      this.accessories = seedList[0];
      accessoryDrop.setAttribute("selected", this.accessories);

      if (seedList[1] >= 0 && seedList[1] <= 4) {
        // If 0-4 set to 1
        this.base = 0; // the element interprets 0 as male
      } else if (seedList[1] >= 5 && seedList[1] <= 9) {
        // if 5-9 set to 5
        this.base = 1; // the element intreprets 1 as female
      }
      baseDrop.setAttribute("selected", this.base);

      this.leg = 0;

      this.face = seedList[3];
      faceDrop.setAttribute("selected", this.face);

      this.faceItem = seedList[4];
      faceItemDrop.setAttribute("selected", this.faceItem);

      this.hair = seedList[5];
      hairDrop.setAttribute("selected", this.hair);

      this.pants = seedList[6];
      pantsDrop.setAttribute("selected", this.pants);

      this.shirt = seedList[7];
      shirtDrop.setAttribute("selected", this.shirt);

      this.skin = seedList[8];
      skinDrop.setAttribute("selected", this.skin);

      this.hatColor = seedList[9];
      hatColorDrop.setAttribute("selected", this.hatColor);

      this.hat = retrievedHat;
      hatDrop.setAttribute("selected", this.hat);

      // Sets boolean variables. Boxes are checked accordingly
      const fireBox = this.shadowRoot.getElementById("fireBox");
      this.fire = retrievedFire == "true"; // sets true if equal to 'true'
      if (this.fire == true) {
        fireBox.setAttribute("checked", "true");
      }
      const walkingBox = this.shadowRoot.getElementById("walkingBox");
      this.walking = retrievedWalking == "true";
      if (this.walking == true) {
        walkingBox.setAttribute("checked", "true");
      }
      const circleBox = this.shadowRoot.getElementById("circleBox");
      this.circle = retrievedCircle == "true";
      if (this.circle == true) {
        circleBox.setAttribute("checked", "true");
      }
    } else {
      // queryString not found
      // Randomize options
      // Sets properties according to the randomized settings
      console.log("RANDOMIZING");

      this.accessories = Math.floor(Math.random() * 10); // 0-9
      const accessoryDrop = this.shadowRoot.getElementById("accessoryDrop");
      accessoryDrop.setAttribute("selected", this.accessories);

      const baseRandom = Math.floor(Math.random() * 10);
      if (baseRandom >= 0 && baseRandom <= 4) {
        // 0-9. Set to 0 if 0-4. Set to 1 if 5-9
        this.base = 0;
      } else if (baseRandom >= 5 && baseRandom <= 9) {
        this.base = 1;
      }
      baseDrop.setAttribute("selected", this.base);

      this.leg = 0;

      this.face = Math.floor(Math.random() * 6); // 0-5
      faceDrop.setAttribute("selected", this.face);

      this.faceItem = Math.floor(Math.random() * 10); // 0-9
      faceItemDrop.setAttribute("selected", this.faceItem);

      this.hair = Math.floor(Math.random() * 10); // 0-9
      hairDrop.setAttribute("selected", this.hair);

      this.pants = Math.floor(Math.random() * 10); // 0-9
      pantsDrop.setAttribute("selected", this.pants);

      this.shirt = Math.floor(Math.random() * 10); // 0-9
      shirtDrop.setAttribute("selected", this.shirt);

      this.skin = Math.floor(Math.random() * 10); // 0-9
      skinDrop.setAttribute("selected", this.skin);

      this.hatColor = Math.floor(Math.random() * 10); // 0-9
      hatColorDrop.setAttribute("selected", this.hatColor);

      const hatList = [
        "none",
        "bunny",
        "coffee",
        "construction",
        "cowboy",
        "education",
        "knight",
        "ninja",
        "party",
        "pirate",
        "watermelon",
      ];
      this.hat = character.hat;
      hatDrop.setAttribute("selected", this.hat);

      // this.fire = character.fire;
      // this.walking = character.walking;
      // this.circle = character.circle;
      this.fire = Math.random() < 0.5; // random either true or false
      const fireBox = this.shadowRoot.getElementById("fireBox");
      if (this.fire == true) {
        fireBox.setAttribute("checked", "true");
      }
      this.walking = Math.random() < 0.5;
      const walkingBox = this.shadowRoot.getElementById("walkingBox");
      if (this.walking == true) {
        walkingBox.setAttribute("checked", "true");
      }
      this.circle = Math.random() < 0.5;
      const circleBox = this.shadowRoot.getElementById("circleBox");
      if (this.circle == true) {
        circleBox.setAttribute("checked", "true");
      }
    }

    // Listen to the 'selected' attribute change of the wired-combo element
    const combo0 = this.shadowRoot.getElementById("accessoryDrop");
    const observer0 = new MutationObserver(() => {
      this.accessories = combo0.selected;
    });
    observer0.observe(combo0, {
      attributes: true, // Watch for attribute changes
      attributeFilter: ["selected"], // Only watch the 'selected' attribute
    });

    const combo1 = this.shadowRoot.getElementById("baseDrop");
    const observer1 = new MutationObserver(() => {
      // THE BASE SVGS ARE SET TO 0 FOR MALE AND 1 FOR FEMALE
      // BUT THE SEED ACCEPTS 1 AS MALE AND 5 AS FEMALE
      this.base = combo1.selected;
    });
    observer1.observe(combo1, {
      attributes: true, // Watch for attribute changes
      attributeFilter: ["selected"], // Only watch the 'selected' attribute
    });

    const combo2 = this.shadowRoot.getElementById("faceDrop");
    const observer2 = new MutationObserver(() => {
      this.face = combo2.selected;
    });
    observer2.observe(combo2, {
      attributes: true, // Watch for attribute changes
      attributeFilter: ["selected"], // Only watch the 'selected' attribute
    });

    const combo3 = this.shadowRoot.getElementById("faceItemDrop");
    const observer3 = new MutationObserver(() => {
      this.faceItem = combo3.selected;
    });
    observer3.observe(combo3, {
      attributes: true, // Watch for attribute changes
      attributeFilter: ["selected"], // Only watch the 'selected' attribute
    });

    const combo4 = this.shadowRoot.getElementById("hairDrop");
    const observer4 = new MutationObserver(() => {
      this.hair = combo4.selected;
    });
    observer4.observe(combo4, {
      attributes: true, // Watch for attribute changes
      attributeFilter: ["selected"], // Only watch the 'selected' attribute
    });

    const combo5 = this.shadowRoot.getElementById("pantsDrop");
    const observer5 = new MutationObserver(() => {
      this.pants = combo5.selected;
    });
    observer5.observe(combo5, {
      attributes: true, // Watch for attribute changes
      attributeFilter: ["selected"], // Only watch the 'selected' attribute
    });

    const combo6 = this.shadowRoot.getElementById("shirtDrop");
    const observer6 = new MutationObserver(() => {
      this.shirt = combo6.selected;
    });
    observer6.observe(combo6, {
      attributes: true, // Watch for attribute changes
      attributeFilter: ["selected"], // Only watch the 'selected' attribute
    });

    const combo7 = this.shadowRoot.getElementById("skinDrop");
    const observer7 = new MutationObserver(() => {
      this.skin = combo7.selected;
    });
    observer7.observe(combo7, {
      attributes: true, // Watch for attribute changes
      attributeFilter: ["selected"], // Only watch the 'selected' attribute
    });

    const combo8 = this.shadowRoot.getElementById("hatColorDrop");
    const observer8 = new MutationObserver(() => {
      this.hatColor = combo8.selected;
    });
    observer8.observe(combo8, {
      attributes: true, // Watch for attribute changes
      attributeFilter: ["selected"], // Only watch the 'selected' attribute
    });

    const combo9 = this.shadowRoot.getElementById("hatDrop");
    const observer9 = new MutationObserver(() => {
      this.hat = combo9.selected;
    });
    observer9.observe(combo9, {
      attributes: true, // Watch for attribute changes
      attributeFilter: ["selected"], // Only watch the 'selected' attribute
    });
  }
  // Runs when a property changes
  // Adjusts the character's size depending on viewport width
  updated(changedProperties) {
    if (changedProperties.has("viewportWidth")) {
      if (this.viewportWidth < 568) {
        this.characterHeight = "300";
        this.characterWidth = "300";
      } else if (this.viewportWidth < 768) {
        this.characterHeight = "375";
        this.characterWidth = "375";
      } else {
        this.characterHeight = "450";
        this.characterWidth = "450";
      }
    }

    // Updates the seedText when one of the properties change
    // Leg is not included because the user doesn't change it
    // THE BASE SVGS ARE SET TO 0 FOR MALE AND 1 FOR FEMALE
    // BUT THE SEED ACCEPTS 1 AS MALE AND 5 AS FEMALE
    if (
      changedProperties.has("accessories") ||
      changedProperties.has("base") ||
      changedProperties.has("face") ||
      changedProperties.has("faceItem") ||
      changedProperties.has("hair") ||
      changedProperties.has("pants") ||
      changedProperties.has("shirt") ||
      changedProperties.has("skin") ||
      changedProperties.has("hatColor")
    ) {
      if (this.base == 0) {
        // the "1" is for the male base. the "0" is for the leg
        this.seedText =
          this.accessories +
          "1" +
          "0" +
          this.face +
          this.faceItem +
          this.hair +
          this.pants +
          this.shirt +
          this.skin +
          this.hatColor;
      } else if (this.base == 1) {
        // the "5" is for the female base. the "0" is for the leg
        this.seedText =
          this.accessories +
          "5" +
          "0" +
          this.face +
          this.faceItem +
          this.hair +
          this.pants +
          this.shirt +
          this.skin +
          this.hatColor;
      }
    }

    // Updates querystring according to changes without reloading the page
    const domain = window.location.origin; // gets domain without slug
    const params = new URLSearchParams({
      // creates querystring
      seed: this.seedText,
      hat: this.hat,
      fire: this.fire,
      walking: this.walking,
      circle: this.circle,
    });
    const fullURL = `${domain}?${params.toString()}`; // makes new URL
    history.pushState(null, "", fullURL); // pushes new URL without reloading
  }

  toggleFire() {
    this.fire = !this.fire;
  }
  toggleWalking() {
    this.walking = !this.walking;
  }
  toggleCircle() {
    this.circle = !this.circle;
  }
  copyButton() {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL);
    alert("URL copied to clipboard");
  }
  randomizeButton() {
    const baseURL = window.location.origin; // gets domain without slug
    window.location.href = baseURL;
  }

  handleResize() {
    this.viewportWidth = window.innerWidth; // Update the viewportWidth
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(Ist256Project2.tag, Ist256Project2);

import { LitElement, html, css } from "lit";

class RpgCharacter extends LitElement {
  static properties = {
    accessories: { type: Number },
    base: { type: String },
    face: { type: Number },
    faceItem: { type: Number },
    hair: { type: Number },
    pants: { type: Number },
    shirt: { type: Number },
    skin: { type: Number },
    hatColor: { type: Number },
    hat: { type: String },
    onFire: { type: Boolean },
    walking: { type: Boolean },
    circle: { type: Boolean },
    seed: { type: String }, // Ensure seed is treated as a string
  };

  constructor() {
    super();
    this.accessories = 0;
    this.base = "Male";
    this.face = 0;
    this.faceItem = 0;
    this.hair = 0;
    this.pants = 0;
    this.shirt = 0;
    this.skin = 0;
    this.hatColor = 0;
    this.hat = "none";
    this.onFire = false;
    this.walking = true;
    this.circle = true;
    this.seed = Math.random().toString(36).substring(2, 12); // Generate a valid seed
  }

  handleSliderChange(event) {
    const { id, value } = event.target;
    this[id] = parseInt(value, 10); // Ensure numeric input
  }

  handleToggle(event) {
    const { id, checked } = event.target;
    this[id] = checked;
  }

  updated(changedProperties) {
    if (changedProperties.has("seed")) {
      this.processSeed();
    }

    if (changedProperties.has("accessories") || changedProperties.has("base")) {
      this.performCharacterUpdate();
    }
  }

  processSeed() {
    try {
      const numericSeed = parseInt(this.seed, 36); // Convert to numeric format
      if (!isNaN(numericSeed)) {
        this.numericSeed = numericSeed; // Store the processed seed
      } else {
        console.error("Invalid seed value:", this.seed);
      }
    } catch (error) {
      console.error("Error processing seed:", error);
    }
  }

  performCharacterUpdate() {
    console.log("Character updated:", {
      accessories: this.accessories,
      base: this.base,
      seed: this.seed,
    });
  }

  render() {
    return html`
      <div>
        <label>Accessories:</label>
        <input
          type="range"
          id="accessories"
          min="0"
          max="10"
          .value=${this.accessories}
          @input=${this.handleSliderChange}
        />
        <label>Base:</label>
        <select id="base" @change=${this.handleSliderChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <!-- Additional sliders and toggles for other properties -->
        <div>Seed: ${this.seed}</div>
      </div>
    `;
  }

  static styles = css`
    /* Your styles here */
  `;
}

customElements.define("rpg-character", RpgCharacter);

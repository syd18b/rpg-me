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
      <div class="container">
        <div class="section">
          <label>Accessories:</label>
          <input
            type="range"
            id="accessories"
            min="0"
            max="10"
            .value=${this.accessories}
            @input=${this.handleSliderChange}
            class="slider"
          />
        </div>

        <div class="section">
          <label>Base:</label>
          <select id="base" @change=${this.handleSliderChange} class="select">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div class="section">
          <div>Seed: ${this.seed}</div>
        </div>
      </div>
    `;
  }

  static styles = css`
    /* Global styles for the page */
    html,
    body {
      background-color: #fecfcc; /* Light pink background */
      margin: 0;
      padding: 0;
      height: 100%;
    }

    body {
      font-family: "Arial", sans-serif;
      color: #333;
    }

    .container {
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff; /* White container */
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .section {
      margin-bottom: 20px;
    }

    label {
      font-size: 1.2em;
      margin-bottom: 5px;
      display: block;
    }

    .slider {
      width: 60%;
      height: 5px;
      background-color: #fecfcc;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    .slider:hover {
      background-color: #bbb;
    }

    .select {
      width: 35%;
      padding: 5px 10px;
      font-size: 1em;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #f9f9f9;
    }

    .select:focus {
      border-color: #5b9bd5;
      outline: none;
    }
    label {
      font-family: "Arial", sans-serif; /* Change the font family */
      font-size: 1.2rem; /* Adjust the font size */
      font-weight: bold; /* Make it bold */
      color: #333; /* Set text color */
      margin-bottom: 10px; /* Add space below label */
    }

    .section div {
      font-size: 1.1em;
      color: #555;
    }
  `;
}

customElements.define("rpg-character", RpgCharacter);

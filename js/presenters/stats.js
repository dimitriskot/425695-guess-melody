import StatsView from "../views/results/stats";

export default class StatsPresenter {
  constructor(model) {
    this.model = model;
    this.stats = new StatsView(this.model.result);
  }

  get element() {
    return this.stats.element;
  }

  render() {
    this.stats.renderProgressText = this.renderProgressText.bind(this);
  }

  renderProgressText(data) {
    return this.model.progress(data);
  }
}

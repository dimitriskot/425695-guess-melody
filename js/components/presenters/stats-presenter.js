import StatsView from "../views/results/stats-view";

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
    return this.model.renderProgressText(data);
  }
}

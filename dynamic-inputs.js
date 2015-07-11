Template.dynamicInputs.events({
  'click #add-option': function(e, template) {
    template.optionInputs.add();
  },

  'click #remove-option': function(e, template) {
    var index = $(e.currentTarget).data('order') - 1;
    template.optionInputs.remove(index);
  },

  'change .option-text': function(e, template) {
    var index = $(e.currentTarget).data('order') - 1;
    template.optionInputs.updateValue(index, $(e.currentTarget).val());
  }
});

Template.dynamicInputs.helpers({
  inputItems: function() {
    var template = UI._templateInstance();
    return template.optionInputs.all();
  }
});

Template.dynamicInputs.created = function() {
  this.optionInputs = new OptionInputs();

  if (this.data.opts) {
    this.optionInputs.inputs = this.data.opts;
  }
}

// This is a reactive object for 
// tracking the inputs that exist without actually 
// saving back to the database, leaving the 
// persistence to happen when save is clicked.
function OptionInputs() {
  this.inputs = [];
  this.inputDep = new Tracker.Dependency;

  this.add = function(value) {
    if (typeof value === undefined) {
      value = '';
    }
    this.inputs.push(value);
    this.inputDep.changed();
  };

  this.remove = function(index) {
    this.inputs.splice(index, 1);
    this.inputDep.changed();
  };

  this.updateValue = function(index, value) {
    this.inputs[index] = value;
    this.inputDep.changed();
  };

  this.all = function() {
    this.inputDep.depend();
    return _.map(this.inputs, function(value, index) { return {value: value, index: index + 1} });
  };
}

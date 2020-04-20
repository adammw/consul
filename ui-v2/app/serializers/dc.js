import Serializer from './application';

export default Serializer.extend({
  primaryKey: 'Name',
  normalizePayload: function(payload, id, requestType) {
    switch (requestType) {
      case 'query':
        return payload.map(item => {
          return {
            [this.primaryKey]: item,
          };
        });
    }
    return payload;
  },
});

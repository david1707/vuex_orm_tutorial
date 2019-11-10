import { Model } from '@vuex-orm/core'

export default class User extends Model {
    static entity = 'ORMusers'

    static fields () {
        return {
            id: this.number(0),
            name: this.string(''),
            username: this.string(''),
            email: this.string(''),
            website: this.string(''),
        }
    }
}
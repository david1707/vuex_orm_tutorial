import { Model } from '@vuex-orm/core'

import User from './User'

export default class Post extends Model {
    static entity = 'ORMposts'

    static fields () {
        return {
            id: this.number(0),
            userId: this.number(0),
            user_object: this.belongsTo(User, 'userId'),
            title: this.string(''),
            body: this.string(''),
        }
    }
}
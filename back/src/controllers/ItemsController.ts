import { Request, Response } from 'express'
import knex from '../database/connection'

class ItemsController {
  async Listar(req: Request, res:Response) {
    const items = await knex('items').select('*')
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        //image_url: `http://localhost:3333/uploads/${item.image}`
        image_url: `http://10.0.0.104:3333/uploads/${item.image}` //ENDEREÇO DE IP. PRA FUNCIONAR NO MOBILE
      };
    })
    return res.json(serializedItems)
  }

}

export default ItemsController;
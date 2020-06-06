"use strict";

const axios = require("axios");

const Env = use("Env");

const xml = require("../../../utils/xml");

/**
 * Resourceful controller for interacting with orders
 */
class OrderController {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async commit({ params, request, response }) {
    request.PipedriveDeals.data.map(async (val) => {
      const retorno = xml.getXML(val);

      const apikey = Env.get("BLING_KEY");

      try {
        const result = await axios.post(
          `https://bling.com.br/Api/v2/pedido/json?apikey=${apikey}&xml=${retorno}`,
          {},
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        const pvNumber = result.data.retorno.pedidos
          ? result.data.retorno.pedidos[0].pedido.numero
          : null;

        if (pvNumber) {
          arrPedidos.push(pvNumber);
        }
      } catch (e) {
        console.log(e);
      }
    });

    return { message: "Pedidos importados com sucesso!" };
  }
}

module.exports = OrderController;

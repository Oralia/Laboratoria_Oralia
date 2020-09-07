import React, { Fragment, useState } from "react";
import Navbar from "../Navbar";
import mburger from "../assets/img/02-menu-burger.svg";
import Item from "../utils/Item";
import styles from "./style.module.css";
import ButtonNext from "../utils/ButtonNext";
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons' */
import InfoClients from "../utils/InfoClients";
import InfoTotal from "../utils/InfoTotal";
import Boton from "../utils/Buton";
import back from "../assets/img/arrow.svg";
import Modal from "react-modal";
import Order from "../Order/Order.js";

Modal.setAppElement("#root");

const MenuBurger = ({
  dataHamburger,
  dataIngredients,
  dataExtras,
  dataDrinks,
  dataAccompaniments,
  order,
  addingProductToOrder,
  deletingProductToOrder,
  setOrder,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Fragment>
      <Navbar />
      <div className={styles.logoUp}>
        <Boton image={mburger} adress="/menu-burger" />
      </div>
      <InfoClients />
      <section className={styles.container}>
        <strong>HAMBURGUESAS</strong>
        <br />
        <div class={styles.menuBurger}>
          <div className={styles.containerHamburguer}>
            <p>1.Tipo</p>
            {dataHamburger.map((product) => (
              <Item
                key={product.id}
                product={product}
                order={order}
                addingProductToOrder={addingProductToOrder}
                deletingProductToOrder={deletingProductToOrder}
              />
            ))}
          </div>

          <div className={styles.genericCont}>
            <p>2.Ingrediente</p>
            <div className={styles.containerIngredients}>
              {dataIngredients.map((product) => (
                <Item
                  key={product.id}
                  product={product}
                  /* order={order} */
                  addingProductToOrder={addingProductToOrder}
                  deletingProductToOrder={deletingProductToOrder}
                />
              ))}
            </div>
          </div>

          <div className={styles.containerExtras}>
            <p>3.Extra</p>
            {dataExtras.map((product) => (
              <Item
                key={product.id}
                product={product}
                /* order={order} */
                addingProductToOrder={addingProductToOrder}
                deletingProductToOrder={deletingProductToOrder}
              />
            ))}
          </div>
        </div>

        <div class={styles.bebidasAccom}>
          <div className={styles.genericCont}>
            <p>BEBIDAS</p>
            <div className={styles.containerDrinks}>
              {dataDrinks.map((product) => (
                <Item
                  key={product.id}
                  product={product}
                  /* order={order} */
                  addingProductToOrder={addingProductToOrder}
                  deletingProductToOrder={deletingProductToOrder}
                />
              ))}
            </div>
          </div>

          <div className={styles.genericCont}>
            <p>ACOMPAÑAMIENTOS</p>
            <div className={styles.containerAccompaniments}>
              {dataAccompaniments.map((product) => (
                <Item
                  key={product.id}
                  product={product}
                  /* order={order} */
                  addingProductToOrder={addingProductToOrder}
                  deletingProductToOrder={deletingProductToOrder}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <InfoTotal />

      <button className={styles.button} onClick={() => setModalIsOpen(true)}>
        Enviar pedido a cocina
      </button>
      <Modal className={styles.Modal} isOpen={modalIsOpen}>
        <h2 style={{ color: "white" }}>Confirmar Orden</h2>
        <Order order={order} />
        <button
          className={styles.buttonCancel}
          onClick={() => setModalIsOpen(false)}
        >
          Cancelar
        </button>

        <button
          className={styles.buttonCancel}
          onClick={() => setModalIsOpen(false)}
        >
          Enviar a Cocina
        </button>
      </Modal>
    </Fragment>
  );
};

export default MenuBurger;

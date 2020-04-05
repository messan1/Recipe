import React from "react";
import { Block,Text } from "../Atoms";
import BlockImage from "../Atoms/BlockImage";

export default function CardBgImgText(props) {
    const {children ,...data} = props
    return (
        <Block center>
            <BlockImage right {...data}>
                <Block style={{paddingLeft:20,paddingBottom:10}}>
                    {children}
                </Block>
            </BlockImage>
        </Block>
    )
}

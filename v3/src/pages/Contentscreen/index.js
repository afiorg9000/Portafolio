import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Button } from "components/Button";
import { List } from "components/List";

const ContentscreenPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter mx-[auto] lg:pb-[41px] xl:pb-[47px] pb-[53px] 3xl:pb-[63px] lg:pt-[13px] xl:pt-[15px] pt-[17px] 3xl:pt-[20px] w-[100%]">
        <Stack className="lg:h-[568px] xl:h-[650px] h-[730px] 2xl:h-[731px] 3xl:h-[877px] w-[100%]">
          <Stack className="absolute lg:h-[568px] xl:h-[650px] h-[730px] 2xl:h-[731px] 3xl:h-[877px] inset-[0] w-[100%]">
            <div className="3xl:mr-[98px] absolute bg-gradient  bottom-[0] lg:mr-[63px] lg:p-[3px] mb-[0] mr-[82px] p-[4px] right-[6%] rounded-radius30 w-[19%] xl:mr-[72px] xl:p-[3px] ">
              <Row className="absolute bg-white_A700 items-center justify-center outline 3xl:pt-[10px] lg:pt-[7px] xl:pt-[8px] pt-[9px] lg:px-[19px] xl:px-[22px] px-[25px] 3xl:px-[30px] rounded-radius30">
                <Text className="font-medium lg:mb-[14px] xl:mb-[16px] mb-[19px] 3xl:mb-[22px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_700 text-left w-[auto]">{`Be part of our Beta App`}</Text>
                <Image
                  src={"images/img_logo.png"}
                  className="lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] object-contain w-[9%]"
                  alt="Logo"
                />
              </Row>
            </div>
            <Stack className="absolute lg:h-[567px] xl:h-[649px] h-[729px] 2xl:h-[730px] 3xl:h-[876px] inset-[0] w-[100%]">
              <div className="absolute bg-gradient1  bottom-[0] lg:h-[484px] xl:h-[554px] h-[622px] 2xl:h-[623px] 3xl:h-[747px] inset-x-[0] mx-[auto] outline outline-[3px] outline-white_A700 rounded-radius70 w-[25%]"></div>
              <Row className="absolute items-start justify-start lg:pl-[43px] xl:pl-[49px] pl-[56px] 3xl:pl-[67px] lg:pr-[101px] xl:pr-[116px] pr-[131px] 3xl:pr-[157px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] top-[0] w-[100%]">
                <Text className="font-bold font-raleway lg:text-fs54 xl:text-fs62 text-fs70 3xl:text-fs84 text-left text-purple_A200 w-[auto]">{`Virtual Try On`}</Text>
                <Row className="font-inter items-center justify-center lg:mb-[41px] xl:mb-[47px] mb-[53px] 3xl:mb-[63px] ml-[112px] 3xl:ml-[134px] lg:ml-[87px] xl:ml-[99px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[23%]">
                  <Text className="font-normal lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-purple_A200 w-[auto]">{`Home`}</Text>
                  <Text className="font-normal lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_700 text-left w-[auto]">{`How it Works`}</Text>
                  <Text className="font-normal lg:ml-[42px] xl:ml-[48px] ml-[54px] 3xl:ml-[64px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_700 text-left w-[auto]">{`About Us`}</Text>
                </Row>
                <Image
                  src={"images/img_playcircle.svg"}
                  className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] lg:mb-[40px] xl:mb-[46px] mb-[52px] 3xl:mb-[62px] lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] object-contain lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                  alt="playcircle"
                />
                <Text className="font-inter font-normal lg:mb-[41px] xl:mb-[47px] mb-[53px] 3xl:mb-[63px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_700 text-left w-[auto]">{`Watch Demo`}</Text>
                <Text className="bg-deep_purple_A100 font-inter font-normal leading-lh lg:mb-[33px] xl:mb-[38px] mb-[43px] 3xl:mb-[51px] lg:ml-[109px] xl:ml-[125px] ml-[141px] 3xl:ml-[169px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius25 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 w-[8%]">{`Register`}</Text>
              </Row>
            </Stack>
          </Stack>
          <Row className="absolute bottom-[11%] items-start justify-between right-[5%] w-[85%]">
            <Column className="lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] w-[26%]">
              <Column className="items-center w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text className="bg-gray_100 font-medium lg:pl-[13px] xl:pl-[15px] pl-[17px] 3xl:pl-[20px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] lg:py-[3px] xl:py-[4px] py-[5px] 3xl:py-[6px] rounded-radius25 text-center lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-gray_500 w-[auto]">{`Femme`}</Text>
                  <Text className="bg-gray_100 font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:pr-[5px] xl:pr-[6px] pr-[7px] 3xl:pr-[8px] lg:py-[3px] xl:py-[4px] py-[5px] 3xl:py-[6px] rounded-radius25 text-center lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-gray_500 w-[auto]">{`Masc`}</Text>
                  <Button className="bg-gray_100 font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:py-[4px] xl:py-[5px] py-[6.29px] 2xl:py-[6px] 3xl:py-[7px] rounded-radius25 text-center lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-gray_500 w-[36%]">{`Genderless`}</Button>
                </Row>
                <Stack className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] mx-[auto] w-[97%]">
                  <Row className="absolute bottom-[4%] inset-x-[0] items-center justify-between top-[5%] w-[100%]">
                    <Text className="font-medium text-center lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-gray_700 w-[auto]">{`Skin Color`}</Text>
                    <Image
                      src={"images/img_backgroundslid.png"}
                      className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] mb-[1px] lg:ml-[10px] xl:ml-[12px] ml-[13.92px] 2xl:ml-[13px] 3xl:ml-[16px] object-contain w-[72%]"
                      alt="BackgroundSlid"
                    />
                  </Row>
                  <Image
                    src={"images/img_adjuster.svg"}
                    className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] left-[33%] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="Adjuster"
                  />
                </Stack>
                <Row className="items-start justify-center lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] lg:pl-[139px] xl:pl-[159px] pl-[179px] 3xl:pl-[214px] pr-[101.93px] 2xl:pr-[102px] 3xl:pr-[122px] lg:pr-[79px] xl:pr-[90px] w-[100%]">
                  <Stack className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[8%]">
                    <Image
                      src={"images/img_rectangle.svg"}
                      className="absolute lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] inset-[0] object-cover rounded-radius30 w-[100%]"
                      alt="Rectangle"
                    />
                    <Text className="absolute font-medium inset-x-[0] mx-[auto] text-center lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-gray_700 top-[0] w-[max-content]">{`65`}</Text>
                  </Stack>
                  <Text className="font-medium mb-[1px] ml-[1px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_700 w-[auto]">{`In`}</Text>
                </Row>
                <Row className="items-start justify-end lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:pl-[24px] xl:pl-[27px] pl-[31px] 3xl:pl-[37px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] w-[100%]">
                  <Text className="font-medium text-center lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-gray_700 w-[auto]">{`Height`}</Text>
                  <Image
                    src={"images/img_slider.svg"}
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[15.92px] 2xl:ml-[15px] 3xl:ml-[19px] xl:mt-[3px] lg:mt-[3px] mt-[4px] object-contain w-[69%]"
                    alt="Slider"
                  />
                </Row>
                <Row className="items-start justify-center lg:mt-[12px] xl:mt-[14px] mt-[15.91px] 2xl:mt-[15px] 3xl:mt-[19px] 3xl:pl-[109px] lg:pl-[70px] xl:pl-[80px] pl-[91px] lg:pr-[147px] xl:pr-[168px] pr-[189.93px] 2xl:pr-[190px] 3xl:pr-[228px] w-[100%]">
                  <Stack className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[8%]">
                    <Image
                      src={"images/img_rectangle_1.svg"}
                      className="absolute lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] inset-[0] object-cover rounded-radius30 w-[100%]"
                      alt="Rectangle"
                    />
                    <Text className="absolute font-medium inset-x-[0] mx-[auto] text-center lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-gray_700 top-[0] w-[max-content]">{`59`}</Text>
                  </Stack>
                  <Text className="font-medium mb-[1px] xl:ml-[1px] lg:ml-[1px] ml-[2px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_700 w-[auto]">{`lb`}</Text>
                </Row>
                <Row className="items-center justify-end lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:pl-[22px] xl:pl-[25px] pl-[29px] 3xl:pl-[34px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] w-[100%]">
                  <Text className="font-medium text-center lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-gray_700 w-[auto]">{`Weight`}</Text>
                  <Image
                    src={"images/img_slider_1.svg"}
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mb-[2.11px] 3xl:mb-[2px] 2xl:mb-[2px] lg:ml-[11px] xl:ml-[13px] ml-[14.94px] 2xl:ml-[14px] 3xl:ml-[17px] mt-[2px] xl:my-[1px] lg:my-[1px] object-contain w-[69%]"
                    alt="Slider"
                  />
                </Row>
                <Row className="items-start justify-center lg:mt-[11px] xl:mt-[13px] mt-[14.89px] 2xl:mt-[14px] 3xl:mt-[17px] 3xl:pl-[109px] lg:pl-[70px] xl:pl-[80px] pl-[91px] lg:pr-[147px] xl:pr-[168px] pr-[189.93px] 2xl:pr-[190px] 3xl:pr-[228px] w-[100%]">
                  <Stack className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[8%]">
                    <Image
                      src={"images/img_rectangle_2.svg"}
                      className="absolute lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] inset-[0] object-cover rounded-radius30 w-[100%]"
                      alt="Rectangle"
                    />
                    <Text className="absolute font-medium inset-x-[0] mx-[auto] text-center lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-gray_700 top-[0] w-[max-content]">{`22`}</Text>
                  </Stack>
                  <Text className="font-medium mb-[1px] ml-[1px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_700 w-[auto]">{`In`}</Text>
                </Row>
                <Row className="items-start justify-end lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:pl-[28px] xl:pl-[32px] pl-[36px] 3xl:pl-[43px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] w-[100%]">
                  <Text className="font-medium lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-gray_700 text-left w-[auto]">{`Chest`}</Text>
                  <Image
                    src={"images/img_slider_2.svg"}
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[15.94px] 2xl:ml-[15px] 3xl:ml-[19px] xl:mt-[2px] lg:mt-[2px] mt-[3px] object-contain w-[69%]"
                    alt="Slider"
                  />
                </Row>
                <Row className="items-start justify-center lg:mt-[12px] xl:mt-[14px] mt-[15.91px] 2xl:mt-[15px] 3xl:mt-[19px] 3xl:pl-[109px] lg:pl-[70px] xl:pl-[80px] pl-[91px] lg:pr-[147px] xl:pr-[168px] pr-[189.93px] 2xl:pr-[190px] 3xl:pr-[228px] w-[100%]">
                  <Stack className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[8%]">
                    <Image
                      src={"images/img_rectangle_3.svg"}
                      className="absolute lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] inset-[0] object-cover rounded-radius30 w-[100%]"
                      alt="Rectangle"
                    />
                    <Text className="absolute font-medium inset-x-[0] mx-[auto] text-center lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-gray_700 top-[0] w-[max-content]">{`15`}</Text>
                  </Stack>
                  <Text className="font-medium mb-[1px] ml-[1px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_700 w-[auto]">{`In`}</Text>
                </Row>
                <Row className="items-start justify-end lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:pl-[30px] xl:pl-[34px] pl-[39px] 3xl:pl-[46px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] w-[100%]">
                  <Text className="font-medium lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-gray_700 text-left w-[auto]">{`Waist`}</Text>
                  <Image
                    src={"images/img_slider_3.svg"}
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[15.94px] 2xl:ml-[15px] 3xl:ml-[19px] xl:mt-[3px] lg:mt-[3px] mt-[4px] object-contain w-[69%]"
                    alt="Slider"
                  />
                </Row>
              </Column>
              <Column className="items-end lg:mt-[13px] xl:mt-[15px] mt-[16.91px] 2xl:mt-[16px] 3xl:mt-[20px] lg:pl-[21px] xl:pl-[24px] pl-[27px] 3xl:pl-[32px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] w-[100%]">
                <List
                  className="gap-[0] min-h-[auto] w-[90%]"
                  orientation="vertical"
                >
                  <Column className="lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] 3xl:my-[10px] lg:my-[6px] xl:my-[7px] my-[8.465px] 2xl:my-[8px] w-[93%]">
                    <Row className="items-start justify-start lg:pl-[35px] xl:pl-[40px] pl-[45px] 3xl:pl-[54px] lg:pr-[143px] xl:pr-[164px] pr-[184.93px] 2xl:pr-[185px] 3xl:pr-[222px] w-[100%]">
                      <Stack className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[10%]">
                        <Image
                          src={"images/img_rectangle_4.svg"}
                          className="absolute lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] inset-[0] object-cover rounded-radius30 w-[100%]"
                          alt="Rectangle"
                        />
                        <Text className="absolute font-medium inset-x-[0] mx-[auto] text-center lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-gray_700 top-[0] w-[max-content]">{`26`}</Text>
                      </Stack>
                      <Text className="font-medium mb-[1px] ml-[1px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_700 w-[auto]">{`In`}</Text>
                    </Row>
                    <Row className="items-start justify-between lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                      <Text className="font-medium lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-gray_700 text-left w-[auto]">{`Hips`}</Text>
                      <Image
                        src={"images/img_slider_4.svg"}
                        className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[15.94px] 2xl:ml-[15px] 3xl:ml-[19px] xl:mt-[3px] lg:mt-[3px] mt-[4px] object-contain w-[82%]"
                        alt="Slider"
                      />
                    </Row>
                  </Column>
                  <Column className="3xl:my-[10px] lg:my-[6px] xl:my-[7px] my-[8.465px] 2xl:my-[8px] w-[100%]">
                    <Row className="items-start justify-center lg:pl-[49px] xl:pl-[56px] pl-[64px] 3xl:pl-[76px] lg:pr-[143px] xl:pr-[164px] pr-[184.93px] 2xl:pr-[185px] 3xl:pr-[222px] w-[100%]">
                      <Stack className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[9%]">
                        <Image
                          src={"images/img_rectangle_5.svg"}
                          className="absolute lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] inset-[0] object-cover rounded-radius30 w-[100%]"
                          alt="Rectangle"
                        />
                        <Text className="absolute font-medium inset-x-[0] mx-[auto] text-center lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-gray_700 top-[0] w-[max-content]">{`22`}</Text>
                      </Stack>
                      <Text className="font-medium mb-[1px] ml-[1px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_700 w-[auto]">{`In`}</Text>
                    </Row>
                    <Row className="items-start justify-between lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                      <Text className="font-medium lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-gray_700 text-left w-[auto]">{`Inseam`}</Text>
                      <Image
                        src={"images/img_slider_5.svg"}
                        className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mb-[1px] lg:ml-[12px] xl:ml-[14px] ml-[15.94px] 2xl:ml-[15px] 3xl:ml-[19px] xl:mt-[3px] lg:mt-[3px] mt-[4px] object-contain w-[77%]"
                        alt="Slider"
                      />
                    </Row>
                  </Column>
                </List>
              </Column>
              <Column className="lg:mt-[13px] xl:mt-[15px] mt-[16.89px] 2xl:mt-[16px] 3xl:mt-[20px] w-[100%]">
                <Column className="items-start justify-start w-[100%]">
                  <Row className="items-center justify-start 3xl:ml-[109px] lg:ml-[70px] xl:ml-[80px] ml-[91px] w-[35%]">
                    <Stack className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mb-[1px] w-[24%]">
                      <Image
                        src={"images/img_rectangle_6.svg"}
                        className="absolute lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] inset-[0] object-cover rounded-radius30 w-[100%]"
                        alt="Rectangle"
                      />
                      <Text className="absolute font-medium inset-x-[0] mx-[auto] text-center lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-gray_700 top-[0] w-[max-content]">{`0`}</Text>
                    </Stack>
                    <Text className="font-medium xl:ml-[1px] lg:ml-[1px] ml-[2px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_700 w-[auto]">{`Hours/ week`}</Text>
                  </Row>
                  <Column className="lg:mt-[5px] mt-[6.83px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[100%]">
                    <Row className="items-start justify-end lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] w-[100%]">
                      <Text className="font-medium lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-gray_700 text-left w-[auto]">{`Exercise`}</Text>
                      <Image
                        src={"images/img_slider_6.svg"}
                        className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mb-[1px] lg:ml-[11px] xl:ml-[13px] ml-[14.94px] 2xl:ml-[14px] 3xl:ml-[17px] xl:mt-[2px] lg:mt-[2px] mt-[3px] object-contain w-[69%]"
                        alt="Slider"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
            <List
              className="gap-[0] lg:mb-[31px] xl:mb-[36px] mb-[41.13px] 2xl:mb-[41px] 3xl:mb-[49px] min-h-[auto] lg:ml-[367px] xl:ml-[419px] ml-[472px] 3xl:ml-[566px] w-[35%]"
              orientation="vertical"
            >
              <Stack className="lg:h-[151px] xl:h-[173px] h-[194px] 2xl:h-[195px] 3xl:h-[233px] my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                <Row className="absolute inset-x-[0] items-center justify-between mx-[auto] top-[11%] w-[84%]">
                  <Image
                    src={"images/img_profilephoto.png"}
                    className="lg:h-[109px] xl:h-[125px] h-[140px] 2xl:h-[141px] 3xl:h-[169px] object-contain rounded-radius300 w-[auto]"
                    alt="ProfilePhoto"
                  />
                  <Column className="items-center lg:ml-[24px] xl:ml-[27px] ml-[31px] 3xl:ml-[37px] lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] w-[53%]">
                    <Text className="font-normal mx-[auto] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_700 w-[auto]">{`Upload profile photo`}</Text>
                    <Text className="font-medium leading-lh text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9 text-gray_700 w-[100%]">{`Upload a photo of your face so it can be included it in your virtual replica.`}</Text>
                    <Text className="bg-gray_100 font-medium leading-lh lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] mx-[auto] lg:px-[27px] xl:px-[31px] px-[35px] 3xl:px-[42px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius25 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 w-[97%]">{`Upload`}</Text>
                  </Column>
                </Row>
                <Image
                  src={"images/img_profileupload.svg"}
                  className="absolute lg:h-[151px] xl:h-[173px] h-[194px] 2xl:h-[195px] 3xl:h-[233px] inset-[0] object-cover w-[100%]"
                  alt="ProfileUpload"
                />
              </Stack>
              <Stack className="lg:h-[188px] xl:h-[215px] h-[241px] 2xl:h-[242px] 3xl:h-[290px] my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                <Row className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[80%]">
                  <Image
                    src={"images/img_clothingphoto.png"}
                    className="lg:h-[142px] xl:h-[162px] h-[182px] 2xl:h-[183px] 3xl:h-[219px] object-contain rounded-radius50 w-[33%]"
                    alt="ClothingPhoto"
                  />
                  <Column className="items-center justify-start lg:mb-[14px] xl:mb-[16px] mb-[19px] 3xl:mb-[22px] lg:ml-[34px] xl:ml-[39px] ml-[44px] 3xl:ml-[52px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[54%]">
                    <Text className="font-normal mx-[auto] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_700 w-[auto]">{`Upload Clothing`}</Text>
                    <Text className="font-medium leading-lh xl:mt-[1px] lg:mt-[1px] mt-[2px] mx-[auto] text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9 text-gray_700 w-[97%]">{`Upload photos of a clothing item to try on your virtual replica.`}</Text>
                    <Text className="bg-gray_100 font-medium leading-lh lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] lg:px-[27px] xl:px-[31px] px-[35px] 3xl:px-[42px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius25 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 w-[100%]">{`Upload`}</Text>
                    <Text className="bg-gray_100 font-medium leading-lh mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:pl-[21px] xl:pl-[24px] pl-[28px] 3xl:pl-[33px] lg:pr-[22px] xl:pr-[25px] pr-[29px] 3xl:pr-[34px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius25 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 w-[100%]">{`Go to Online Store`}</Text>
                  </Column>
                </Row>
                <Image
                  src={"images/img_uploadclothing.svg"}
                  className="absolute lg:h-[188px] xl:h-[215px] h-[241px] 2xl:h-[242px] 3xl:h-[290px] inset-[0] object-cover w-[100%]"
                  alt="Uploadclothing"
                />
              </Stack>
            </List>
          </Row>
        </Stack>
      </Column>
    </>
  );
};

export default ContentscreenPage;

import type { Struct, Schema } from '@strapi/strapi';

export interface SectionHeroMobileSection extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_mobile_sections';
  info: {
    displayName: 'Hero Mobile Section';
    icon: 'pencil';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    verifiedTicket: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Tip: Schema.Attribute.String;
    socials: Schema.Attribute.Component<'element.socials', true>;
  };
}

export interface SectionExclusiveContentBlockMobileSection
  extends Struct.ComponentSchema {
  collectionName: 'components_section_exclusive_content_block_mobile_section_s';
  info: {
    displayName: 'Exclusive Content Block Mobile Section ';
    icon: 'paperPlane';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    overlayIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    overlayText: Schema.Attribute.String;
    button: Schema.Attribute.Component<'element.button', true>;
    gallery: Schema.Attribute.Component<'element.gallery', true>;
  };
}

export interface ElementSocials extends Struct.ComponentSchema {
  collectionName: 'components_element_socials';
  info: {
    displayName: 'Socials';
    icon: 'filter';
    description: '';
  };
  attributes: {
    socialIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    socialUrl: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    socialColoredIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface ElementGallery extends Struct.ComponentSchema {
  collectionName: 'components_element_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'server';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementButton extends Struct.ComponentSchema {
  collectionName: 'components_element_buttons';
  info: {
    displayName: 'Button';
    icon: 'database';
    description: '';
  };
  attributes: {
    buttonName: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    buttonIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'section.hero-mobile-section': SectionHeroMobileSection;
      'section.exclusive-content-block-mobile-section': SectionExclusiveContentBlockMobileSection;
      'element.socials': ElementSocials;
      'element.gallery': ElementGallery;
      'element.button': ElementButton;
    }
  }
}

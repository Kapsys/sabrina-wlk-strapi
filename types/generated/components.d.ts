import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
    icon: 'cog';
  };
  attributes: {
    metaTitle: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    keywords: Schema.Attribute.Text;
    metaRobots: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
    metaViewport: Schema.Attribute.String;
    canonicalURL: Schema.Attribute.String;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'Meta Social';
    icon: 'cursor';
  };
  attributes: {
    socialNetwork: Schema.Attribute.Enumeration<['Twitter', 'Facebook']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface SectionStatisticsSection extends Struct.ComponentSchema {
  collectionName: 'components_section_statistics_sections';
  info: {
    displayName: 'Statistics Section';
    icon: 'gate';
    description: '';
  };
  attributes: {
    entrySection: Schema.Attribute.Component<'section.entry-section', false>;
    socialStatisticsBlock: Schema.Attribute.Component<
      'element.social-statistics-block',
      true
    >;
  };
}

export interface SectionPodcastSection extends Struct.ComponentSchema {
  collectionName: 'components_section_podcast_sections';
  info: {
    displayName: 'Podcast Section';
    icon: 'layout';
  };
  attributes: {
    entrySection: Schema.Attribute.Component<'section.entry-section', false>;
    gallery: Schema.Attribute.Component<'element.gallery', true>;
  };
}

export interface SectionPartners extends Struct.ComponentSchema {
  collectionName: 'components_section_partners';
  info: {
    displayName: 'Partners';
    icon: 'star';
  };
  attributes: {
    partnerLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    partnerLink: Schema.Attribute.String;
  };
}

export interface SectionOnlyfansSection extends Struct.ComponentSchema {
  collectionName: 'components_section_onlyfans_sections';
  info: {
    displayName: 'Onlyfans Section';
    icon: 'layer';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    entrySection: Schema.Attribute.Component<'section.entry-section', false>;
  };
}

export interface SectionLascanaSection extends Struct.ComponentSchema {
  collectionName: 'components_section_lascana_sections';
  info: {
    displayName: 'Lascana Section';
    icon: 'collapse';
  };
  attributes: {
    lascanaIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    button: Schema.Attribute.Component<'element.button', true>;
    gallery: Schema.Attribute.Component<'element.gallery', true>;
  };
}

export interface SectionHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'oneToMany';
    description: '';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    button: Schema.Attribute.Component<'element.button', true>;
    socials: Schema.Attribute.Component<'element.socials', true>;
    partners: Schema.Attribute.Component<'section.partners', true>;
  };
}

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

export interface SectionEntrySection extends Struct.ComponentSchema {
  collectionName: 'components_section_entry_sections';
  info: {
    displayName: 'Entry Section';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    button: Schema.Attribute.Component<'element.button', true>;
  };
}

export interface SectionContactSection extends Struct.ComponentSchema {
  collectionName: 'components_section_contact_sections';
  info: {
    displayName: 'Contact Section';
    icon: 'expand';
    description: '';
  };
  attributes: {
    entrySection: Schema.Attribute.Component<'section.entry-section', false>;
    form: Schema.Attribute.Component<'element.form', false>;
  };
}

export interface SectionBrandsSection extends Struct.ComponentSchema {
  collectionName: 'components_section_brands_sections';
  info: {
    displayName: 'Brands Section';
    description: '';
  };
  attributes: {
    entrySection: Schema.Attribute.Component<'section.entry-section', false>;
    partners: Schema.Attribute.Component<'section.partners', true>;
  };
}

export interface SectionAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_section_about_sections';
  info: {
    displayName: 'About Section';
    icon: 'discuss';
  };
  attributes: {
    entrySection: Schema.Attribute.Component<'section.entry-section', false>;
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

export interface ElementSocialStatisticsBlock extends Struct.ComponentSchema {
  collectionName: 'components_element_social_statistics_block_s';
  info: {
    displayName: 'Social Statistics Block ';
    icon: 'filter';
  };
  attributes: {
    socials: Schema.Attribute.Component<'element.socials', false>;
    number: Schema.Attribute.String;
    text: Schema.Attribute.String;
    button: Schema.Attribute.Component<'element.button', false>;
  };
}

export interface ElementMenuItems extends Struct.ComponentSchema {
  collectionName: 'components_element_menu_items';
  info: {
    displayName: 'Menu Items';
    icon: 'earth';
  };
  attributes: {
    menuItem: Schema.Attribute.String;
    menuItemUrl: Schema.Attribute.String;
  };
}

export interface ElementHeader extends Struct.ComponentSchema {
  collectionName: 'components_element_headers';
  info: {
    displayName: 'Header';
    icon: 'envelop';
  };
  attributes: {
    headerlogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    menuItems: Schema.Attribute.Component<'element.menu-items', true>;
    socials: Schema.Attribute.Component<'element.socials', true>;
    button: Schema.Attribute.Component<'element.button', true>;
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

export interface ElementForm extends Struct.ComponentSchema {
  collectionName: 'components_element_forms';
  info: {
    displayName: 'Form';
    icon: 'filter';
    description: '';
  };
  attributes: {
    formInputs: Schema.Attribute.Component<'element.form-inputs', true>;
    checkboxText: Schema.Attribute.String;
    privacyPolicyText: Schema.Attribute.String;
    privacyPolicyUrl: Schema.Attribute.String;
    button: Schema.Attribute.Component<'element.button', false>;
  };
}

export interface ElementFormInputs extends Struct.ComponentSchema {
  collectionName: 'components_element_form_inputs';
  info: {
    displayName: 'Form Inputs';
    icon: 'stack';
  };
  attributes: {
    name: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['text', 'phone', 'email', 'textarea']>;
  };
}

export interface ElementFooter extends Struct.ComponentSchema {
  collectionName: 'components_element_footers';
  info: {
    displayName: 'Footer';
    icon: 'filter';
    description: '';
  };
  attributes: {
    footerText: Schema.Attribute.String;
    kapsysText: Schema.Attribute.String;
    kapsysLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    kapsysLogoText: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    kapsysLogoLink: Schema.Attribute.String;
    socials: Schema.Attribute.Component<'element.socials', true>;
    menuItems: Schema.Attribute.Component<'element.menu-items', true>;
    button: Schema.Attribute.Component<'element.button', true>;
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
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'section.statistics-section': SectionStatisticsSection;
      'section.podcast-section': SectionPodcastSection;
      'section.partners': SectionPartners;
      'section.onlyfans-section': SectionOnlyfansSection;
      'section.lascana-section': SectionLascanaSection;
      'section.hero-section': SectionHeroSection;
      'section.hero-mobile-section': SectionHeroMobileSection;
      'section.exclusive-content-block-mobile-section': SectionExclusiveContentBlockMobileSection;
      'section.entry-section': SectionEntrySection;
      'section.contact-section': SectionContactSection;
      'section.brands-section': SectionBrandsSection;
      'section.about-section': SectionAboutSection;
      'element.socials': ElementSocials;
      'element.social-statistics-block': ElementSocialStatisticsBlock;
      'element.menu-items': ElementMenuItems;
      'element.header': ElementHeader;
      'element.gallery': ElementGallery;
      'element.form': ElementForm;
      'element.form-inputs': ElementFormInputs;
      'element.footer': ElementFooter;
      'element.button': ElementButton;
    }
  }
}

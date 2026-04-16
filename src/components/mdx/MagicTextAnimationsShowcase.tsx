import { ComponentPreview } from "@/components/mdx/ComponentPreview";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { AuroraText } from "@/components/ui/aurora-text";
import { Highlighter } from "@/components/ui/highlighter";
import { HyperText } from "@/components/ui/hyper-text";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { MorphingText } from "@/components/ui/morphing-text";
import { NumberTicker } from "@/components/ui/number-ticker";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { SparklesText } from "@/components/ui/sparkles-text";
import { SpinningText } from "@/components/ui/spinning-text";
import { TextAnimate } from "@/components/ui/text-animate";
import Text3DFlip from "@/components/ui/text-3d-flip";
import { TextReveal } from "@/components/ui/text-reveal";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { VideoText } from "@/components/ui/video-text";
import { WordRotate } from "@/components/ui/word-rotate";

export function MagicTextAnimatePreview() {
  return (
    <ComponentPreview
          description="Segment-based motion presets for words, characters, lines, and full text blocks."
          code={`import { TextAnimate } from '@/components/ui/text-animate';

export function Demo() {
  return (
    <TextAnimate animation="blurInUp" by="character" once className="text-3xl font-semibold">
      Blur in by character
    </TextAnimate>
  );
}`}
        >
          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            className="text-center text-3xl font-semibold tracking-tight"
          >
            Blur in by character
          </TextAnimate>
    </ComponentPreview>
  );
}

export function MagicTypingAnimationPreview() {
  return (
    <ComponentPreview
          description="Typewriter effect with looping word sets and cursor control."
          code={`import { TypingAnimation } from '@/components/ui/typing-animation';

export function Demo() {
  return (
    <TypingAnimation
      words={['Build faster', 'Ship motion', 'Polish launches']}
      className="text-3xl font-semibold"
      duration={70}
      pauseDelay={900}
      loop
    />
  );
}`}
        >
          <TypingAnimation
            words={["Build faster", "Ship motion", "Polish launches"]}
            className="text-center text-3xl font-semibold tracking-tight"
            duration={70}
            pauseDelay={900}
            loop
          />
    </ComponentPreview>
  );
}

export function MagicLineShadowTextPreview() {
  return (
    <ComponentPreview
          description="A moving line-shadow treatment for editorial headlines."
          code={`import { LineShadowText } from '@/components/ui/line-shadow-text';

export function Demo() {
  return (
    <LineShadowText className="text-4xl font-black">
      SHADOW PLAY
    </LineShadowText>
  );
}`}
        >
          <LineShadowText className="text-center text-4xl font-black tracking-[-0.06em] md:text-6xl">
            SHADOW PLAY
          </LineShadowText>
    </ComponentPreview>
  );
}

export function MagicAuroraTextPreview() {
  return (
    <ComponentPreview
          description="Multi-color gradient text with a drifting aurora animation."
          code={`import { AuroraText } from '@/components/ui/aurora-text';

export function Demo() {
  return (
    <h3 className="text-4xl font-black tracking-tight">
      Ship with <AuroraText>atmosphere</AuroraText>
    </h3>
  );
}`}
        >
          <h3 className="text-center text-4xl font-black tracking-tight md:text-6xl">
            Ship with <AuroraText>atmosphere</AuroraText>
          </h3>
    </ComponentPreview>
  );
}

export function MagicVideoTextPreview() {
  return (
    <ComponentPreview
          description="A text mask that fills characters with a looping video texture."
          code={`import { VideoText } from '@/components/ui/video-text';

export function Demo() {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl">
      <VideoText src="https://cdn.magicui.design/ocean-small.webm">
        OCEAN
      </VideoText>
    </div>
  );
}`}
        >
          <div className="relative h-[220px] w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-black">
            <VideoText src="https://cdn.magicui.design/ocean-small.webm">
              OCEAN
            </VideoText>
          </div>
    </ComponentPreview>
  );
}

export function MagicNumberTickerPreview() {
  return (
    <ComponentPreview
          description="In-view number interpolation for KPI callouts and stats."
          code={`import { NumberTicker } from '@/components/ui/number-ticker';

export function Demo() {
  return (
    <NumberTicker value={12840} className="text-5xl font-black" />
  );
}`}
        >
          <div className="text-center">
            <NumberTicker
              value={12840}
              className="text-5xl font-black tracking-[-0.05em] md:text-7xl"
            />
            <p className="mt-3 text-sm text-muted-foreground">
              Monthly active sessions
            </p>
          </div>
    </ComponentPreview>
  );
}

export function MagicAnimatedShinyTextPreview() {
  return (
    <ComponentPreview
          description="A subtle light sweep that works well for status chips and microcopy."
          code={`import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';

export function Demo() {
  return (
    <AnimatedShinyText className="rounded-full border px-4 py-1 text-sm">
      Early access is open
    </AnimatedShinyText>
  );
}`}
        >
          <AnimatedShinyText className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-4 py-1 text-sm font-medium dark:border-white/10 dark:bg-white/5">
            Early access is open
          </AnimatedShinyText>
    </ComponentPreview>
  );
}

export function MagicAnimatedGradientTextPreview() {
  return (
    <ComponentPreview
          description="A looping color band for feature headlines and launch moments."
          code={`import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';

export function Demo() {
  return (
    <AnimatedGradientText className="text-4xl font-black">
      MOTION SELLS THE STORY
    </AnimatedGradientText>
  );
}`}
        >
          <AnimatedGradientText className="text-center text-4xl font-black tracking-[-0.05em] md:text-6xl">
            MOTION SELLS THE STORY
          </AnimatedGradientText>
    </ComponentPreview>
  );
}

export function MagicTextRevealPreview() {
  return (
    <ComponentPreview
          description="Scroll-driven word reveal for storytelling sections."
          code={`import { TextReveal } from '@/components/ui/text-reveal';

export function Demo() {
  return (
    <div className="h-96 overflow-y-auto rounded-2xl border">
      <TextReveal>
        Great launch pages reveal value progressively as the user scrolls.
      </TextReveal>
    </div>
  );
}`}
        >
          <div className="h-96 w-full max-w-4xl overflow-y-auto rounded-2xl border border-border bg-background">
            <TextReveal>
              Great launch pages reveal value progressively as the user scrolls
              through the narrative instead of dumping every message above the
              fold.
            </TextReveal>
          </div>
    </ComponentPreview>
  );
}

export function MagicHyperTextPreview() {
  return (
    <ComponentPreview
          description="Fast letter scrambling that resolves into the final message."
          code={`import { HyperText } from '@/components/ui/hyper-text';

export function Demo() {
  return (
    <HyperText className="text-4xl font-black">
      HYPERDRIVE
    </HyperText>
  );
}`}
        >
          <HyperText className="text-center text-4xl font-black tracking-[-0.06em] md:text-6xl">
            HYPERDRIVE
          </HyperText>
    </ComponentPreview>
  );
}

export function MagicWordRotatePreview() {
  return (
    <ComponentPreview
          description="Rotating headline copy for product positioning and value props."
          code={`import { WordRotate } from '@/components/ui/word-rotate';

export function Demo() {
  return (
    <div className="flex items-center gap-3 text-4xl font-black">
      <span>Built for</span>
      <WordRotate words={['designers', 'founders', 'teams']} />
    </div>
  );
}`}
        >
          <div className="flex flex-wrap items-center justify-center gap-3 text-3xl font-black tracking-tight md:text-5xl">
            <span>Built for</span>
            <WordRotate
              words={["designers", "founders", "teams"]}
              className="text-center"
            />
          </div>
    </ComponentPreview>
  );
}

export function MagicScrollBasedVelocityPreview() {
  return (
    <ComponentPreview
          description="Continuous marquee rows that speed up and reverse with page scroll."
          code={`import { ScrollVelocityContainer, ScrollVelocityRow } from '@/components/ui/scroll-based-velocity';

export function Demo() {
  return (
    <ScrollVelocityContainer className="space-y-2">
      <ScrollVelocityRow baseVelocity={4}>MOTION SYSTEMS • TYPOGRAPHY • LAUNCH UI • </ScrollVelocityRow>
      <ScrollVelocityRow baseVelocity={-3}>MAGIC UI • ASTRO • REACT • TAILWIND • </ScrollVelocityRow>
    </ScrollVelocityContainer>
  );
}`}
        >
          <ScrollVelocityContainer className="w-full max-w-4xl space-y-3 py-4">
            <ScrollVelocityRow
              className="text-2xl font-black tracking-[0.18em]"
              baseVelocity={4}
            >
              <span className="mr-8">MOTION SYSTEMS</span>
              <span className="mr-8">TYPOGRAPHY</span>
              <span className="mr-8">LAUNCH UI</span>
            </ScrollVelocityRow>
            <ScrollVelocityRow
              className="text-2xl font-black tracking-[0.18em] text-muted-foreground"
              baseVelocity={-3}
            >
              <span className="mr-8">MAGIC UI</span>
              <span className="mr-8">ASTRO</span>
              <span className="mr-8">REACT</span>
              <span className="mr-8">TAILWIND</span>
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
    </ComponentPreview>
  );
}

export function MagicSparklesTextPreview() {
  return (
    <ComponentPreview
          description="Ambient sparkles around a callout headline."
          code={`import { SparklesText } from '@/components/ui/sparkles-text';

export function Demo() {
  return (
    <SparklesText className="text-5xl font-black">
      Celebrate the launch
    </SparklesText>
  );
}`}
        >
          <SparklesText className="text-center text-5xl font-black tracking-tight md:text-6xl">
            Celebrate the launch
          </SparklesText>
    </ComponentPreview>
  );
}

export function MagicMorphingTextPreview() {
  return (
    <ComponentPreview
          description="Soft blur morphs between phrases for hero sections and brand messages."
          code={`import { MorphingText } from '@/components/ui/morphing-text';

export function Demo() {
  return (
    <MorphingText texts={['Launch', 'Scale', 'Refine']} className="text-5xl" />
  );
}`}
        >
          <MorphingText
            texts={["Launch", "Scale", "Refine"]}
            className="h-24 text-5xl md:h-28 md:text-7xl"
          />
    </ComponentPreview>
  );
}

export function MagicSpinningTextPreview() {
  return (
    <ComponentPreview
          description="Circular rotating copy that pairs well with badges and hero art."
          code={`import { SpinningText } from '@/components/ui/spinning-text';

export function Demo() {
  return (
    <div className="grid place-items-center">
      <SpinningText className="text-sm font-semibold uppercase">
        Magic UI • Text Motion •
      </SpinningText>
    </div>
  );
}`}
        >
          <div className="grid h-48 w-48 place-items-center rounded-full border border-dashed border-border">
            <SpinningText className="text-sm font-semibold uppercase tracking-[0.18em]">
              Magic UI • Text Motion •
            </SpinningText>
            <div className="grid h-24 w-24 place-items-center rounded-full bg-muted text-xs font-medium uppercase tracking-[0.24em]">
              Hub
            </div>
          </div>
    </ComponentPreview>
  );
}

export function MagicTextHighlighterPreview() {
  return (
    <ComponentPreview
          description="Hand-drawn annotation marks for emphasis in product copy."
          code={`import { Highlighter } from '@/components/ui/highlighter';

export function Demo() {
  return (
    <p className="text-2xl font-medium">
      Ship the <Highlighter color="#d9f99d">important line</Highlighter> first.
    </p>
  );
}`}
        >
          <p className="max-w-2xl text-center text-2xl font-medium tracking-tight md:text-3xl">
            Ship the{" "}
            <Highlighter color="#d9f99d">
              important line
            </Highlighter>{" "}
            first.
          </p>
    </ComponentPreview>
  );
}

export function MagicText3DFlipPreview() {
  return (
    <ComponentPreview
          description="Hover-triggered dimensional character flips for bold display typography."
          code={`import Text3DFlip from '@/components/ui/text-3d-flip';

export function Demo() {
  return (
    <Text3DFlip className="text-5xl font-black">
      Flip to explore
    </Text3DFlip>
  );
}`}
        >
          <Text3DFlip
            className="cursor-pointer text-center text-5xl font-black tracking-[-0.06em] md:text-7xl"
            textClassName="text-foreground"
            flipTextClassName="text-lime-500"
          >
            Flip to explore
          </Text3DFlip>
    </ComponentPreview>
  );
}
